import { expect } from '@playwright/test';
import { test } from '../../services/fixtures/uiFixrures';


test.describe('Academy bugs Test', () => {
    test.beforeEach(async ({ app }) => {
        const { mainPage, cookieConsentDialog } = app;
        await mainPage.openPage();
        await cookieConsentDialog.acceptAllCookies();
    });


    test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({app}) => {
        //Выбираем количество товаров на странице
        await app.productsPage.clickProductImage('4281370')
        //await page.waitForTimeout(40000)
        await expect(app.bugPopup.popup).toBeVisible()
    })


    test('The page freezes when clicking on the numbers of results', {tag: ['@High', '@Crash']}, async ({app}) => {
        //Выбираем количество товаров на странице
        await app.productsPage.selectPerPage(50)
        await expect(app.bugPopup.bugMessage).toBeVisible()
    })

    test('The page freezes when changing the currency', {tag: ['@High', '@Crash']},async ({app}) => {
        //Кликаем на товар
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.selectCurrency('gbp')
        await expect(app.bugPopup.alternativeBugMessage).toBeVisible()
    })

    test('The manufacturer link opens an error page', {tag: ['@Medium', '@Functional']},async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickManufacturerLink()
        await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('There is too much space before the last letter in "Return to Store"', {tag: ['@Low', '@Content']},async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickAddToCartButton()
        await app.userCartPage.removeCartItem('DNK Yellow Shoes')
        await app.userCartPage.returnButtonClick()
        await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Post Comment"', {tag: ['@High', '@Crash']}, async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.fillProductReply()
        await expect(app.bugPopup.bugMessage).toBeVisible()
    })

    test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickSignInButton()
        await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('The caption of the Sign In button is misaligned vertically', {tag: ['@Low', '@Visual']}, async ({page, app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickSignInButton()
        await app.bugPopup.isPopupVisible()
        await app.bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
        await app.resultPopup.clickViewReportButton()
        await app.bugInfoPopup.closePopup()
        await app.hintPopup.closePopup()
        await app.loginPage.clickSignInButton()
        await app.page.waitForTimeout(10000)
        await expect(app.mainPage.nonCrashBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', {tag: ['@High', '@Crash']},async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickSignUpLink()
        await app.registerPage.clickForgotPasswordLink()
        await app.forgotPasswordPage.fillRetrieveEmailField()
        await app.forgotPasswordPage.clickRetrievePasswordButton()
        await expect(app.bugPopup.bugMessage).toBeVisible()
    })

    test('The text under the New User section is in another language', {tag: ['@Low', '@Content']}, async ({app, page}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.clickSignInButton()
        await app.bugPopup.isPopupVisible()
        await app.bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
        await app.resultPopup.clickViewReportButton()
        await app.bugInfoPopup.closePopup()
        await app.hintPopup.closePopup()
        await app.loginPage.clickNotRegisteredLinkLocator()
        await app.page.waitForTimeout(10000)
        await expect(app.bugPopup.popup).toBeVisible()
    })

    test('When clicking on the update button the product quantity becomes 2 again', {tag: ['@High', '@Functional']}, async ({app}) => {
        await app.productsPage.clickProductItem('4481370')
        await app.productCard.addToCart()
        await app.userCartPage.updateCartItemQuantity('DNK Yellow Shoes', 3)
        await expect(app.resultPopup.firstBugMessage).toBeVisible()
    })

    test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', {tag: ['@High', '@Crash']}, async ({app}) => {
        await app.productsPage.clickProductItem('4381370')
        await app.productCard.selectProductColor('Green')
        await app.productCard.increaseProductQuantity(1)
        await expect(app.bugPopup.bugMessage).toBeVisible()
    })
})


