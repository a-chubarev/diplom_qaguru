export class ResultPopup {
    constructor(page) {
        this.page = page;

        this.firstBugMessage = this.page.locator('#popmake-4406 .example-tile-heading:has-text("#1 Awesome!")');
        this.bugMessage = this.page.getByRole('heading', { name: 'You found a crash bug' })
        this.alternativeBugMessage = this.page
            .getByRole('heading', { name: 'You found a crash bug, examine the page for 5 seconds' })
            .first();
        this.nonCrashBugMessage = this.page.locator('#bug-popup');
        // Всплывающее окно с результатами
        this.resultPopup = page.locator('#result-popup');
        // Кнопка "View Issue Report"
        this.viewReportButton = page.locator('#view-report');
    }

    // Методы для взаимодействия с окном результатов
    async isResultPopupVisible() {
        return await this.resultPopup.isVisible();
    }

    async clickViewReportButton() {
        await this.viewReportButton.click();
    }
}