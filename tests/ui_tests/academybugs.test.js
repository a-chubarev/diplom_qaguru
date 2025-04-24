import {expect, test} from "@playwright/test";
import {
    MainPage,
    ProductsPage,
    ProductCard,
    RegisterPage,
    ForgotPasswordPage,
    UserCartPage,
    BugPopup,
    LoginPage,
    CookieConsentDialog,
    ResultPopup,
    BugInfoPopup,
    HintPopup
} from '../../services/pages'

test.describe('Academy bugs Test', () => {
    let mainPage
    let productsPage
    let productCard
    let registerPage
    let forgotPasswordPage
    let userCartPage
    let bugPopup
    let loginPage
    let cookieConsentDialog
    let resultPopup
    let bugInfoPopup
    let hintPopup
    test.beforeEach(async ({page}) =>{
        mainPage = new MainPage(page);
        productsPage = new ProductsPage(page);
        productCard = new ProductCard(page);
        registerPage = new RegisterPage(page);
        forgotPasswordPage = new ForgotPasswordPage(page);
        userCartPage = new UserCartPage(page);
        bugPopup = new BugPopup(page);
        loginPage = new LoginPage(page);
        cookieConsentDialog = new CookieConsentDialog(page);
        resultPopup = new ResultPopup(page);
        bugInfoPopup = new BugInfoPopup(page);
        hintPopup = new HintPopup(page);
        await mainPage.openPage()
        await cookieConsentDialog.acceptAllCookies()
    })


    test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({page}) => {
        //Выбираем количество товаров на странице
        await productsPage.clickProductImage('4281370')
        //await page.waitForTimeout(40000)
        await expect(bugPopup.popup).toBeVisible()
    })


    test('The page freezes when clicking on the numbers of results', {tag: ['@High', '@Crash']}, async ({}) => {
        //Выбираем количество товаров на странице
        await productsPage.selectPerPage(50)
        await expect(bugPopup.bugMessage).toBeVisible()
    })

    test('The page freezes when changing the currency', {tag: ['@High', '@Crash']},async ({}) => {
        //Кликаем на товар
        await productsPage.clickProductItem('4481370')
        await productCard.selectCurrency('gbp')
        await expect(bugPopup.alternativeBugMessage).toBeVisible()
    })

    test('The manufacturer link opens an error page', {tag: ['@Medium', '@Functional']},async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickManufacturerLink()
        await expect(bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('There is too much space before the last letter in "Return to Store"', {tag: ['@Low', '@Content']},async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickAddToCartButton()
        await userCartPage.removeCartItem('DNK Yellow Shoes')
        await userCartPage.returnButtonClick()
        await expect(bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Post Comment"', {tag: ['@High', '@Crash']}, async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.fillProductReply()
        await expect(bugPopup.bugMessage).toBeVisible()
    })

    test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickSignInButton()
        await expect(bugPopup.nonCrashBugMessage).toBeVisible()
    })

    test('The caption of the Sign In button is misaligned vertically', {tag: ['@Low', '@Visual']}, async ({page}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickSignInButton()
        await bugPopup.isPopupVisible()
        await bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
        await resultPopup.clickViewReportButton()
        await bugInfoPopup.closePopup()
        await hintPopup.closePopup()
        await loginPage.clickSignInButton()
        await page.waitForTimeout(10000)
        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', {tag: ['@High', '@Crash']},async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickSignUpLink()
        await registerPage.clickForgotPasswordLink()
        await forgotPasswordPage.fillRetrieveEmailField()
        await forgotPasswordPage.clickRetrievePasswordButton()
        await expect(bugPopup.bugMessage).toBeVisible()
    })

    test('The text under the New User section is in another language', {tag: ['@Low', '@Content']}, async ({page}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.clickSignInButton()
        await bugPopup.isPopupVisible()
        await bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
        await resultPopup.clickViewReportButton()
        await bugInfoPopup.closePopup()
        await hintPopup.closePopup()
        await loginPage.clickNotRegisteredLinkLocator()
        await page.waitForTimeout(10000)
        await expect(bugPopup.popup).toBeVisible()
    })

    test('When clicking on the update button the product quantity becomes 2 again', {tag: ['@High', '@Functional']}, async ({}) => {
        await productsPage.clickProductItem('4481370')
        await productCard.addToCart()
        await userCartPage.updateCartItemQuantity('DNK Yellow Shoes', 3)
        await expect(resultPopup.firstBugMessage).toBeVisible()
    })

    test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', {tag: ['@High', '@Crash']}, async ({}) => {
        await productsPage.clickProductItem('4381370')
        await productCard.selectProductColor('Green')
        await productCard.increaseProductQuantity(1)
        await expect(bugPopup.bugMessage).toBeVisible()
    })
})


