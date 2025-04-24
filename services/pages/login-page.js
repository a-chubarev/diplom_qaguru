export class LoginPage {
    constructor(page) {
        this.page = page;

        // Локаторы
        this.emailInput = page.locator('#ec_account_login_email');
        this.passwordInput = page.locator('#ec_account_login_password');
        this.signInButton = page.locator('.ec_account_button.signin-gui-bug');
        this.createAccountButton = page.locator('.ec_account_login_create_account_button');
        this.forgotPasswordLink = page.locator('.ec_account_login_link');
        this.emailError = page.locator('#ec_account_login_email_error');
        this.passwordError = page.locator('#ec_account_login_password_error');
        this.loginError = page.locator('.ec_account_error > div');
        this.returningCustomerHeader = page.locator('.ec_cart_header.ec_top').first();
        this.newUserHeader = page.locator('.ec_account_right .ec_cart_header.ec_top');
        this.notRegisteredLinkLocator = page.locator('.ec_account_subheader.untranslated-russian');
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async clickNotRegisteredLinkLocator() {
        await this.notRegisteredLinkLocator.click();
    }
}