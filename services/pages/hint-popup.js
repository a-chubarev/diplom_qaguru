export class HintPopup {
    constructor(page) {
        this.page = page;

        // Локаторы
        this.popup = page.locator('#popmake-4393');
        this.closeButton = this.popup.locator('.pum-close.popmake-close');
    }

    // Проверка видимости модального окна
    async isPopupVisible() {
        await this.popup.waitFor({ state: 'visible', timeout: 10000 });
        return await this.popup.isVisible();
    }

    // Закрытие модального окна
    async closePopup() {
        await this.isPopupVisible(); // Убедитесь, что модальное окно видно
        await this.closeButton.click();
    }
}