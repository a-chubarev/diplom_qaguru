import {expect, test} from "@playwright/test";
import {MainPage, ProductsPage, ProductCard, RegisterPage, ForgotPasswordPage, UserCartPage} from '../../services/pages'

test.describe.serial('Academybugs Test', () => {
    let mainPage
    let productsPage
    let productCard
    let registerPage
    let forgotPasswordPage
    let userCartPage
    test.beforeEach(async ({page}) =>{
        mainPage = new MainPage(page);
        productsPage = new ProductsPage(page);
        productCard = new ProductCard(page);
        registerPage = new RegisterPage(page);
        forgotPasswordPage = new ForgotPasswordPage(page);
        userCartPage = new UserCartPage(page);
        await mainPage.openPage()
    })


    test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({}) => {
        //Выбираем количество товаров на странице
        // await productsPage.productItem('4281370').click()
        await productsPage.productImage('4281370').click()
        await expect(mainPage.bugMessage).toBeVisible()
    })
    test('The page freezes when clicking on the numbers of results', async ({}) => {
        //Выбираем количество товаров на странице
        await productsPage.selectPerPage(50)
        await expect(mainPage.bugMessage).toBeVisible()
    })

    test('The page freezes when changing the currency', async ({}) => {
        //Кликаем на товар
        await productsPage.productItem('4481370').click()
        await productCard.selectCurrency('gbp')
        await expect(mainPage.alternativeBugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.clickSignUpLink()
        await registerPage.clickForgotPasswordLink()
        await forgotPasswordPage.fillRetrieveEmailField()
        await forgotPasswordPage.clickRetrievePasswordButton()
        await expect(mainPage.bugMessage).toBeVisible()
    })

    test('The page becomes unresponsive when clicking on "Post Comment"', async ({}) => {
        await productsPage.productItem('4481370').click()
        await productCard.fillProductReply()
        await expect(mainPage.bugMessage).toBeVisible()
    })

    test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', async ({}) => {
        await productsPage.productItem('4381370').click()
        await productCard.selectProductColor('Green')
        await productCard.increaseProductQuantity(1)
        await expect(mainPage.bugMessage).toBeVisible()
    })
})


