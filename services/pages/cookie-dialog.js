export class CookieConsentDialog {
    constructor(page) {
        this.page = page;

        // Локаторы
        this.cookieDialog = page.locator('#cc-window');
        this.cookieMessage = page.locator('#cookieconsent:desc');
        // "Accept cookies"
        this.acceptAllCookiesButton = page.locator('.cc-btn.cc-save');
        // "Functional only"
        this.acceptFunctionalOnlyButton = page.locator('.cc-btn.cc-dismiss');
        // Ссылка на политику
        this.cookiePolicyLink = page.locator('.cc-message a.cc-link');
    }

    async isCookieDialogVisible() {
        return await this.cookieDialog.isVisible();
    }

    async acceptAllCookies() {
        if (await this.isCookieDialogVisible()){
            await this.acceptAllCookiesButton.click();
            await this.page.waitForSelector('#cc-window', { state: 'hidden' });
        }
    }

    async acceptFunctionalOnly() {
        await this.acceptFunctionalOnlyButton.click();
    }

    async openCookiePolicy() {
        await this.cookiePolicyLink.click();
    }

    async getCookieMessageText() {
        return await this.cookieMessage.textContent();
    }
}