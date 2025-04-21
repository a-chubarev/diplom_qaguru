export class ProductsPage {
    constructor(page) {
        this.page = page;

        // Локаторы блока сортировки
        this.perPage10Link = this.page.locator('.what-we-offer-pagination-link').filter({ hasText: '10' });
        this.perPage25Link = this.page.locator('.ec_selected').filter({ hasText: '25' });
        this.perPage50Link = this.page.locator('.what-we-offer-pagination-link').filter({ hasText: '50' });
        this.showingResultsText = this.page.locator('.ec_product_page_showing');
        this.sortDropdown = this.page.locator('#sortfield');

        //Локатор списка товаров
        this.productList = this.page.locator('#ec_store_product_list');

        // Локаторы для карточки товара
        this.productItem = (productId) => this.page.locator(`#ec_product_li_${productId}`);
        this.productTitle = (productId) => this.productItem(productId).locator('.ec_product_title a');
        this.productPrice = (productId) => this.productItem(productId).locator('.ec_price');
        this.productListPrice = (productId) => this.productItem(productId).locator('.ec_list_price');
        this.successBanner = (productId) => this.productItem(productId).locator('.ec_product_successfully_added');
        this.productImage = (productId) => this.page.locator(`#ec_product_image_effect_${productId}`).getByRole('link')

        // Кнопки внутри карточки товара
        this.addToCartButton = (productId) =>
            this.productItem(productId).locator('a:has-text("ADD TO CART")').first();
        this.checkoutNowButton = (productId) =>
            this.productItem(productId).locator('a.ec_added_to_cart_button').first();
        this.selectOptionsButton = (productId) =>
            this.productItem(productId).locator('a:has-text("Select Options")').first();
    }

    /**
     * Метод для выбора количества элементов на странице.
     * @param option - количество товаров на странице. Допустимое количество - 10, 25, 50
     * @returns {Promise<void>}
     */
    async selectPerPage(option) {
        switch (option) {
            case 10:
                await this.perPage10Link.click();
                break;
            case 25:
                await this.perPage25Link.click();
                break;
            case 50:
                await this.perPage50Link.click();
                break;
            default:
                throw new Error(`Invalid per-page option: ${option}`);
        }
    }

    /**
     * Метод для выбора типа сортировки
     * @param sortValue
     * @returns {Promise<void>}
     */
    async selectSortOption(sortValue) {
        // Проверяю значение на допустимость
        if (![0, 1, 2, 3, 4, 5, 6, 7, 8].includes(sortValue)) {
            throw new Error(`Invalid sort value: ${sortValue}`);
        }

        // Выбираем сортировку в зависимости от выбранного значения
        await this.sortDropdown.selectOption({ value: String(sortValue) });
    }

    /**
     * Получение названия товара
     * @param productId
     * @returns {Promise<*>}
     */
    async getProductTitle(productId) {
        return await this.productTitle(productId).textContent();
    }

    /**
     * Получение текущей цены товара
     * @param productId
     * @returns {Promise<*>}
     */
    async getProductPrice(productId) {
        return await this.productPrice(productId).textContent();
    }

    /**
     * Получение старой цены товара (при наличии)
     * @param productId
     * @returns {Promise<*|null>}
     */
    async getProductListPrice(productId) {
        const listPrice = this.productListPrice(productId);
        if (await listPrice.isVisible()) {
            return await listPrice.textContent();
        }
        return null;
    }

    /**
     * Добавление товара в корзину
     * @param productId
     * @returns {Promise<boolean>}
     */
    async addToCart(productId) {
        const addToCartButton = this.addToCartButton(productId);
        if (await addToCartButton.isVisible()) {
            await addToCartButton.click();
            await this.loaderMessage(productId).waitFor({ state: 'hidden' }); // Ждем завершения загрузки
            return true;
        }
        return false;
    }

    /**
     * Переход к оформлению заказа
     * @param productId
     * @returns {Promise<boolean>}
     */
    async checkoutNow(productId) {
        const checkoutNowButton = this.checkoutNowButton(productId);
        if (await checkoutNowButton.isVisible()) {
            await checkoutNowButton.click();
            return true;
        }
        return false;
    }

    /**
     * Выбор опций товара (кнопка вместо добавления товара в корзину)
     * @param productId
     * @returns {Promise<boolean>}
     */
    async selectProductOptions(productId) {
        const selectOptionsButton = this.selectOptionsButton(productId);
        if (await selectOptionsButton.isVisible()) {
            await selectOptionsButton.click();
            return true;
        }
        return false;
    }

    /**
     * Проверка добавления товара в корзину
     * @param productId
     * @returns {Promise<*>}
     */
    async isSuccessMessageVisible(productId) {
        const successMessage = this.successMessage(productId);
        return await successMessage.isVisible();
    }
}