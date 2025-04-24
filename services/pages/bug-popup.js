export class BugPopup {
    constructor(page) {
        this.page = page;

        this.firstBugMessage = this.page.locator('#popmake-4406 .example-tile-heading:has-text("#1 Awesome!")');
        this.bugMessage = this.page.getByRole('heading', { name: 'You found a crash bug' })
        this.alternativeBugMessage = this.page
            .getByRole('heading', { name: 'You found a crash bug, examine the page for 5 seconds' })
            .first();
        this.nonCrashBugMessage = this.page.locator('#bug-popup');
        this.popup = this.page.locator('#bug-popup');
        // Кнопка закрытия
        this.closeButton = page.locator('#close-popup');
        // Радиокнопки "What type of issue is it?"
        this.issueTypeRadios = page.locator('input[name="answer1"]');
        // Радиокнопки "What should be the expected result?"
        this.expectedResultRadios = page.locator('input[name="answer2"]');
        // Кнопка "Submit"
        this.submitButton = page.locator('#submit-popup');
    }

    async isPopupVisible() {
        await this.popup.waitFor({ state: 'visible'});
        return await this.popup.isVisible();
    }

    async closePopup() {
        await this.closeButton.click();
    }

    async selectIssueType(issueType) {
        const label = this.page.locator(`label:has-text("${issueType}")`);
        await label.click();
    }

    async selectExpectedResult(expectedResult) {
        const label = this.page.locator(`label:has-text("${expectedResult}")`);
        await label.click();
    }

    async submitForm() {
        await this.submitButton.click();
    }

    async fillPopup(issueType, expectedResult) {
        await this.isPopupVisible(); // Убедитесь, что всплывающее окно видно
        await this.selectIssueType(issueType);
        await this.selectExpectedResult(expectedResult);
        await this.submitForm();
    }
}