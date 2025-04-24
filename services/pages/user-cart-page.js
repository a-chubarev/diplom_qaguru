export class UserCartPage {
    constructor(page) {
        this.page = page;

        // Хлебные крошки
        this.breadcrumbs = page.locator('.ec_cart_breadcrumbs');
        this.shoppingCartBreadcrumb = page.locator('.ec_cart_breadcrumb').nth(0);
        this.checkoutDetailsBreadcrumb = page.locator('.ec_cart_breadcrumb').nth(1);
        this.submitPaymentBreadcrumb = page.locator('.ec_cart_breadcrumb').nth(2);

        // Карточки товаров
        this.cartTable = page.locator('.ec_cart');
            // Общий селектор для всех строк товаров - для поиска нужного товара в корзине
        this.cartItemRows = page.locator('.ec_cartitem_row');

        // Расчеты стоимости корзины
        this.cartTotalsHeader = page.locator('.ec_cart_header.ec_top');
        this.cartSubtotal = page.locator('#ec_cart_subtotal');
        this.cartShipping = page.locator('#ec_cart_shipping');
        this.cartGrandTotal = page.locator('#ec_cart_total');

        // Кнопки "Checkout" и "Shopping"
        this.checkoutButton = page.locator('.ec_cart_button_checkout');
        this.continueShoppingButton = page.locator('.ec_cart_button_shopping');

        // Промокод
        this.couponInput = page.locator('#ec_coupon_code');
        this.applyCouponButton = page.locator('#ec_apply_coupon');

        // Подарочная карта
        this.giftCardInput = page.locator('#ec_gift_card');
        this.redeemGiftCardButton = page.locator('#ec_apply_gift_card');

        //Кнопка возврата к магазину при пустой корзине
        this.returnButton = page.locator('.ec_cart_empty_button.academy-bug')
    }

    /**
     * Получить локатор товара
     * @param itemName - название товара
     */
    async getCartItemLocator(itemName) {
        return this.cartItemRows.filter({ hasText: itemName });
    }

    /**
     * Удалить товар из корзины
     * @param itemName - название товара
     * */
    async removeCartItem(itemName) {
        const itemRow = await this.getCartItemLocator(itemName);
        await itemRow.locator('.ec_cartitem_delete').click();
    }

    /**
     * Изменить количество товара (ввод значения в поле количества)
     * @param itemName - название товара
     * @param quantity - количество товара
     * @returns {Promise<void>}
     */
    async updateCartItemQuantity(itemName, quantity) {
        const itemRow = await this.getCartItemLocator(itemName);
        await itemRow.locator('.ec_quantity').fill(quantity.toString());
        await itemRow.locator('.ec_cartitem_update_button').click();
    }

    /**
     * Получить стоимость одной единицы товара
     * @param itemName - название товара
     * @returns {Promise<*>}
     */
    async getItemPrice(itemName) {
        const itemRow = await this.getCartItemLocator(itemName);
        return await itemRow.locator('.ec_cartitem_price').innerText();
    }

    /**
     * Получить общую стоимость товара
     * @param itemName - название товара
     * @returns {Promise<*>}
     */
    async getItemTotal(itemName) {
        const itemRow = await this.getCartItemLocator(itemName);
        return await itemRow.locator('.ec_cartitem_total').innerText();
    }

    /**
     * Применить промокод
     * @param couponCode - промокод
     * @returns {Promise<void>}
     */
    async applyCoupon(couponCode) {
        await this.couponInput.fill(couponCode);
        await this.applyCouponButton.click();
    }

    /**
     * Применить подарочную карту
     * @param giftCardCode - подарочная карта
     * @returns {Promise<void>}
     */
    async redeemGiftCard(giftCardCode) {
        await this.giftCardInput.fill(giftCardCode);
        await this.redeemGiftCardButton.click();
    }

    /**
     * Перейти к оформлению заказа
     * @returns {Promise<void>}
     */
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    /**
     * Вернуться к каталогу товаров
     * @returns {Promise<void>}
     */
    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    //Вернуться к магазину
    async returnButtonClick() {
        await this.returnButton.click();
    }
}