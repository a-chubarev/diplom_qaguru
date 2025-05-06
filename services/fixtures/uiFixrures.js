const { test : base } = require('@playwright/test');
const {
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
} = require('../pages');

const test = base.extend({
    app: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        const productsPage = new ProductsPage(page);
        const productCard = new ProductCard(page);
        const registerPage = new RegisterPage(page);
        const forgotPasswordPage = new ForgotPasswordPage(page);
        const userCartPage = new UserCartPage(page);
        const bugPopup = new BugPopup(page);
        const loginPage = new LoginPage(page);
        const cookieConsentDialog = new CookieConsentDialog(page);
        const resultPopup = new ResultPopup(page);
        const bugInfoPopup = new BugInfoPopup(page);
        const hintPopup = new HintPopup(page);

        // Объединяем всё в один объект
        const app = {
            page,
            mainPage,
            productsPage,
            productCard,
            registerPage,
            forgotPasswordPage,
            userCartPage,
            bugPopup,
            loginPage,
            cookieConsentDialog,
            resultPopup,
            bugInfoPopup,
            hintPopup
        };

        await use(app); // передаем в тест
    }
});

module.exports = { test };