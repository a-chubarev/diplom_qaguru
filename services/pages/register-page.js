export class RegisterPage{
    constructor(page) {
        this.page = page;

        // Форма регистрации
        this.registerForm = page.locator('#ec_account_register');
        this.firstNameInput = page.locator('#ec_account_register_first_name');
        this.lastNameInput = page.locator('#ec_account_register_last_name');
        this.emailInput = page.locator('#ec_account_register_email');
        this.retypeEmailInput = page.locator('#ec_account_register_retype_email');
        this.passwordInput = page.locator('#ec_account_register_password');
        this.retypePasswordInput = page.locator('#ec_account_register_password_retype');
        this.subscribeCheckbox = page.locator('#ec_account_register_is_subscriber');
        this.registerButton = page.locator('.ec_account_button[type="submit"]');

        // Форма входа
        this.loginForm = page.locator('.ec_cart_right form');
        this.loginEmailInput = page.locator('#ec_account_login_email');
        this.loginPasswordInput = page.locator('#ec_account_login_password');
        this.forgotPasswordLink = page.locator('.ec_account_login_link');
        this.signInButton = this.loginForm.locator('.ec_account_button[type="submit"]');
    }


    async fillRegistrationForm(data) {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
        await this.retypeEmailInput.fill(data.email);
        await this.passwordInput.fill(data.password);
        await this.retypePasswordInput.fill(data.password);
        if (data.subscribe) {
            await this.subscribeCheckbox.check();
        }
        await this.registerButton.click();
    }

    async login(email, password) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.signInButton.click();
    }

    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.click();
    }
}