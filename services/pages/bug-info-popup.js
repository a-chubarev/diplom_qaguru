export class BugInfoPopup {
    constructor(page) {
        this.page = page;

        this.popup = page.locator('#popmake-4406');
        this.closeButton = this.popup.locator('.pum-close.popmake-close');
    }

    async isPopupVisible() {
        await this.popup.waitFor({ state: 'visible', timeout: 10000 });
        return await this.popup.isVisible();
    }

    async closePopup() {
        await this.isPopupVisible(); // Убедитесь, что модальное окно видно
        await this.closeButton.click();
    }
}