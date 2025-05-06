# Test info

- Name: Academy bugs Test >> When clicking on the update button the product quantity becomes 2 again
- Location: /home/runner/work/diplom_qaguru/diplom_qaguru/tests/ui_tests/academybugs.test.js:95:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('#popmake-4406 .example-tile-heading:has-text("#1 Awesome!")')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#popmake-4406 .example-tile-heading:has-text("#1 Awesome!")')

    at /home/runner/work/diplom_qaguru/diplom_qaguru/tests/ui_tests/academybugs.test.js:99:55
```

# Page snapshot

```yaml
- text: Manage consent
- link "Skip to content":
  - /url: "#sq-content"
- banner:
  - heading "AcademyBugs.com" [level=3]:
    - link "AcademyBugs.com":
      - /url: https://academybugs.com/
  - navigation:
    - list:
      - listitem:
        - link "Examples of Bugs":
          - /url: https://academybugs.com/
      - listitem:
        - link "Types of Bugs":
          - /url: https://academybugs.com/types/
      - listitem:
        - link "Find Bugs":
          - /url: https://academybugs.com/find-bugs/
      - listitem:
        - link "Report Bugs":
          - /url: https://academybugs.com/report-bugs/
      - listitem:
        - link "":
          - /url: "#"
- main:
  - article:
    - text: SHOPPING CART  CHECKOUT DETAILS  SUBMIT PAYMENT
    - table:
      - rowgroup:
        - row "Product Price Quantity Total":
          - cell "Product"
          - cell "Price"
          - cell "Quantity"
          - cell "Total"
      - rowgroup:
        - row " DNK Yellow Shoes DNK Yellow Shoes $45.00  - 1 + UPDATE $45.00":
          - cell ""
          - cell "DNK Yellow Shoes":
            - img "DNK Yellow Shoes"
          - cell "DNK Yellow Shoes":
            - link "DNK Yellow Shoes":
              - /url: https://academybugs.com/store/dnk-yellow-shoes/
          - cell "$45.00"
          - cell " - 1 + UPDATE":
            - text: 
            - table:
              - rowgroup:
                - row "- 1 +":
                  - cell "-":
                    - button "-"
                  - cell "1":
                    - spinbutton: "3"
                  - cell "+":
                    - button "+"
                - row "UPDATE":
                  - cell "UPDATE"
          - cell "$45.00"
    - text: Cart Totals Cart Subtotal $45.00 Shipping $7.99 Grand Total $152.99
    - link "Checkout":
      - /url: https://academybugs.com/my-cart/?ec_page=checkout_info
    - link "Continue Shopping":
      - /url: https://academybugs.com/store/
    - text: Coupon
    - textbox "Enter Coupon Code"
    - text: Apply Coupon Gift Card
    - textbox "Enter Gift Card"
    - text: Redeem Gift Card
- heading "Select a Currency" [level=4]
- combobox:
  - option "USD" [selected]
  - option "EUR"
  - option "GBP"
  - option "JPY"
- heading "Product Search" [level=4]
- combobox
- button "Search"
- heading "Hot Item" [level=4]
- link:
  - /url: https://academybugs.com/anchor-bracelet
  - img
- link "Silver Heart Bracelet":
  - /url: https://academybugs.com/anchor-bracelet
- text: $275.00
- heading "Store Menu" [level=4]
- list:
  - listitem:
    - link "All Items":
      - /url: https://academybugs.com/store/all-items/
  - listitem:
    - link "Accessories [+]":
      - /url: "#"
  - listitem:
    - link "Fashion Type [+]":
      - /url: "#"
  - listitem:
    - link "Women's Pants":
      - /url: https://academybugs.com/store/womens-pants/
- heading "Filter by Price" [level=4]
- link "$15.00 - $19.99 (1)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=7
- link "$25.00 - $49.99 (2)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=2
- link "$50.00 - $99.99 (3)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=3
- link "$100.00 - $299.99 (11)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=4
- link "Greater Than $299.99 (1)":
  - /url: https://academybugs.com/my-cart/?&perpage=25&pricepoint=5
- heading "Shopping Cart" [level=4]
- link "Shopping Cart (1)":
  - /url: "#"
- heading "Your Account" [level=4]
- text: Email Address*
- textbox
- text: Password*
- textbox
- paragraph:
  - link "Sign Up":
    - /url: https://academybugs.com/account/?ec_page=register
- button "SIGN IN"
- contentinfo:
  - list:
    - listitem:
      - link "uTest":
        - /url: https://www.utest.com/academy
        - img "uTest"
    - listitem:
      - link "Terms & Conditions":
        - /url: https://www.utest.com/terms-and-conditions
    - listitem:
      - link "Privacy Policy":
        - /url: https://www.utest.com/privacy-policy
- link "":
  - /url: "#"
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 | import { test } from '../../services/fixtures/uiFixrures';
   3 |
   4 |
   5 | test.describe('Academy bugs Test', () => {
   6 |     test.beforeEach(async ({ app }) => {
   7 |         const { mainPage, cookieConsentDialog } = app;
   8 |         await mainPage.openPage();
   9 |         await cookieConsentDialog.acceptAllCookies();
   10 |     });
   11 |
   12 |
   13 |     test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({app}) => {
   14 |         //Выбираем количество товаров на странице
   15 |         await app.productsPage.clickProductImage('4281370')
   16 |         //await page.waitForTimeout(40000)
   17 |         await expect(app.bugPopup.popup).toBeVisible()
   18 |     })
   19 |
   20 |
   21 |     test('The page freezes when clicking on the numbers of results', {tag: ['@High', '@Crash']}, async ({app}) => {
   22 |         //Выбираем количество товаров на странице
   23 |         await app.productsPage.selectPerPage(50)
   24 |         await expect(app.bugPopup.bugMessage).toBeVisible()
   25 |     })
   26 |
   27 |     test('The page freezes when changing the currency', {tag: ['@High', '@Crash']},async ({app}) => {
   28 |         //Кликаем на товар
   29 |         await app.productsPage.clickProductItem('4481370')
   30 |         await app.productCard.selectCurrency('gbp')
   31 |         await expect(app.bugPopup.alternativeBugMessage).toBeVisible()
   32 |     })
   33 |
   34 |     test('The manufacturer link opens an error page', {tag: ['@Medium', '@Functional']},async ({app}) => {
   35 |         await app.productsPage.clickProductItem('4481370')
   36 |         await app.productCard.clickManufacturerLink()
   37 |         await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
   38 |     })
   39 |
   40 |     test('There is too much space before the last letter in "Return to Store"', {tag: ['@Low', '@Content']},async ({app}) => {
   41 |         await app.productsPage.clickProductItem('4481370')
   42 |         await app.productCard.clickAddToCartButton()
   43 |         await app.userCartPage.removeCartItem('DNK Yellow Shoes')
   44 |         await app.userCartPage.returnButtonClick()
   45 |         await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
   46 |     })
   47 |
   48 |     test('The page becomes unresponsive when clicking on "Post Comment"', {tag: ['@High', '@Crash']}, async ({app}) => {
   49 |         await app.productsPage.clickProductItem('4481370')
   50 |         await app.productCard.fillProductReply()
   51 |         await expect(app.bugPopup.bugMessage).toBeVisible()
   52 |     })
   53 |
   54 |     test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({app}) => {
   55 |         await app.productsPage.clickProductItem('4481370')
   56 |         await app.productCard.clickSignInButton()
   57 |         await expect(app.bugPopup.nonCrashBugMessage).toBeVisible()
   58 |     })
   59 |
   60 |     test('The caption of the Sign In button is misaligned vertically', {tag: ['@Low', '@Visual']}, async ({page, app}) => {
   61 |         await app.productsPage.clickProductItem('4481370')
   62 |         await app.productCard.clickSignInButton()
   63 |         await app.bugPopup.isPopupVisible()
   64 |         await app.bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
   65 |         await app.resultPopup.clickViewReportButton()
   66 |         await app.bugInfoPopup.closePopup()
   67 |         await app.hintPopup.closePopup()
   68 |         await app.loginPage.clickSignInButton()
   69 |         await app.page.waitForTimeout(10000)
   70 |         await expect(app.mainPage.nonCrashBugMessage).toBeVisible()
   71 |     })
   72 |
   73 |     test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', {tag: ['@High', '@Crash']},async ({app}) => {
   74 |         await app.productsPage.clickProductItem('4481370')
   75 |         await app.productCard.clickSignUpLink()
   76 |         await app.registerPage.clickForgotPasswordLink()
   77 |         await app.forgotPasswordPage.fillRetrieveEmailField()
   78 |         await app.forgotPasswordPage.clickRetrievePasswordButton()
   79 |         await expect(app.bugPopup.bugMessage).toBeVisible()
   80 |     })
   81 |
   82 |     test('The text under the New User section is in another language', {tag: ['@Low', '@Content']}, async ({app, page}) => {
   83 |         await app.productsPage.clickProductItem('4481370')
   84 |         await app.productCard.clickSignInButton()
   85 |         await app.bugPopup.isPopupVisible()
   86 |         await app.bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
   87 |         await app.resultPopup.clickViewReportButton()
   88 |         await app.bugInfoPopup.closePopup()
   89 |         await app.hintPopup.closePopup()
   90 |         await app.loginPage.clickNotRegisteredLinkLocator()
   91 |         await app.page.waitForTimeout(10000)
   92 |         await expect(app.bugPopup.popup).toBeVisible()
   93 |     })
   94 |
   95 |     test('When clicking on the update button the product quantity becomes 2 again', {tag: ['@High', '@Functional']}, async ({app}) => {
   96 |         await app.productsPage.clickProductItem('4481370')
   97 |         await app.productCard.addToCart()
   98 |         await app.userCartPage.updateCartItemQuantity('DNK Yellow Shoes', 3)
>  99 |         await expect(app.resultPopup.firstBugMessage).toBeVisible()
      |                                                       ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  100 |     })
  101 |
  102 |     test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', {tag: ['@High', '@Crash']}, async ({app}) => {
  103 |         await app.productsPage.clickProductItem('4381370')
  104 |         await app.productCard.selectProductColor('Green')
  105 |         await app.productCard.increaseProductQuantity(1)
  106 |         await expect(app.bugPopup.bugMessage).toBeVisible()
  107 |     })
  108 | })
  109 |
  110 |
  111 |
```