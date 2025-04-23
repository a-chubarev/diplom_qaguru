export class BugPopup {
    constructor(page) {
        this.page = page;
        //иконка "Х"
        this.closeButton = this.page.locator('.pum-close.popmake-close');
    }

    /**
     * Закрыть модалку с описанием бага
     */
    async clickCloseButton() {
        await this.closeButton.click();
    }
}