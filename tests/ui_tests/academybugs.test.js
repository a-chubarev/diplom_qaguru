import {expect, test} from "@playwright/test";
import {MainPage, ProductsPage, ProductCard, RegisterPage, ForgotPasswordPage, UserCartPage, BugPopup} from '../../services/pages'

test.describe.serial('Academybugs Test', () => {
    let mainPage
    let productsPage
    let productCard
    let registerPage
    let forgotPasswordPage
    let userCartPage
    let bugPopup
    test.beforeEach(async ({page}) =>{
        mainPage = new MainPage(page);
        productsPage = new ProductsPage(page);
        productCard = new ProductCard(page);
        registerPage = new RegisterPage(page);
        forgotPasswordPage = new ForgotPasswordPage(page);
        userCartPage = new UserCartPage(page);
        bugPopup = new BugPopup(page);
        await mainPage.openPage()
    })


    test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({}) => {
        //Выбираем количество товаров на странице
        // await productsPage.productItem('4281370').click()
        await productsPage.productImage('4281370').click()
        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })


    test('The page freezes when clicking on the numbers of results', {tag: ['@High', '@Crash']}, async ({}) => {
        //Выбираем количество товаров на странице
        await productsPage.selectPerPage(50)
        await expect(mainPage.bugMessage).toBeVisible()
    })

    test('The page freezes when changing the currency', {tag: ['@High', '@Crash']},async ({}) => {
        //Кликаем на товар
        await productsPage.productItem('4481370').click()
        await productCard.selectCurrency('gbp')
        await expect(mainPage.alternativeBugMessage).toBeVisible()
    })

    test('The manufacturer link opens an error page', {tag: ['@Medium', '@Functional']},async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.manufacturerLink.click()
        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })

    //TODO: не работает, судя по всему надо сначала открыть модалку с ShoppingCart
    test('There is too much space before the last letter in "Return to Store"', {tag: ['@Low', '@Content']},async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.shopingCartCheckoutButton.click()
        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Post Comment"', {tag: ['@High', '@Crash']}, async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.fillProductReply()
        await expect(mainPage.bugMessage).toBeVisible()
    })

    test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.clickSignInButton()
        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })

    test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.clickSignInButton()
        await bugPopup.clickCloseButton()

        await expect(mainPage.nonCrashBugMessage).toBeVisible()
    })



    test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.clickSignUpLink()
        await registerPage.clickForgotPasswordLink()
        await forgotPasswordPage.fillRetrieveEmailField()
        await forgotPasswordPage.clickRetrievePasswordButton()
        await expect(mainPage.bugMessage).toBeVisible()
    })



    test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', async ({}) => {
        await productsPage.productItem('4381370').click()
        await productCard.selectProductColor('Green')
        await productCard.increaseProductQuantity(1)
        await expect(mainPage.bugMessage).toBeVisible()
    })
})


