import {AuthorisedUser} from "../helpers";

export class ForgotPasswordPage {
    constructor(page) {
        this.page = page;
        this.userData = new AuthorisedUser()

        // Элементы формы восстановления пароля
        this.emailInput = page.locator('#ec_account_forgot_password_email');
        this.retrievePasswordButton = page.locator('input[value="RETRIEVE PASSWORD"]');

        // Элементы формы входа
        this.loginEmailInput = page.locator('#ec_account_login_email');
        this.loginPasswordInput = page.locator('#ec_account_login_password');
        this.signInButton = page.locator('input[value="SIGN IN"]');
    }

    async clickRetrievePasswordButton() {
        await this.retrievePasswordButton.click();
    }

    async signInButtonClick() {
        await this.signInButton.click();
    }

    async fillRetrieveEmailField(){
        await this.emailInput.fill(this.userData.email);
    }
}