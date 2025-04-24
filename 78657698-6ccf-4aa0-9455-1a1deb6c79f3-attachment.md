# Test info

- Name: Academy bugs Test >> The product image fills the box entirely
- Location: /home/runner/work/diplom_qaguru/diplom_qaguru/tests/ui_tests/academybugs.test.js:48:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('.academy-popup-bug-title')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('.academy-popup-bug-title')
    9 × locator resolved to <h5 class="example-tile-heading academy-popup-bug-title">Loading Title</h5>
      - unexpected value "hidden"

    at /home/runner/work/diplom_qaguru/diplom_qaguru/tests/ui_tests/academybugs.test.js:51:51
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
    - heading "Find Bugs" [level=3]
    - heading "Explore a practice test site that has 25 real bugs planted inside." [level=6]
    - text: View
    - link "10":
      - /url: "#"
    - link "25":
      - /url: "#"
    - link "50":
      - /url: "#"
    - text: Showing all 18 results
    - combobox:
      - option "Default Sorting" [selected]
      - option "Price Low-High"
      - option "Price High-Low"
      - option "Title A-Z"
      - option "Title Z-A"
      - option "Newest"
      - option "Oldest"
      - option "Best Rating"
      - option "Most Viewed"
    - list:
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dnk-yellow-shoes/
        - img "DNK Yellow Shoes"
        - heading "DNK Yellow Shoes" [level=3]:
          - link "DNK Yellow Shoes":
            - /url: https://academybugs.com/store/dnk-yellow-shoes/
        - text: $45.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4481370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dark-grey-jeans/
        - img "Dark Grey Jeans"
        - heading "Dark Grey Jeans" [level=3]:
          - link "Dark Grey Jeans":
            - /url: https://academybugs.com/store/dark-grey-jeans/
        - text: $46.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4281370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/flamingo-tshirt/
        - img "Flamingo Tshirt"
        - heading "Flamingo Tshirt" [level=3]:
          - link "Flamingo Tshirt":
            - /url: https://academybugs.com/store/flamingo-tshirt/
        - text: $15.14
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4881370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/blue-hoodie/
        - img "Blue Hoodie"
        - heading "Blue Hoodie" [level=3]:
          - link "Blue Hoodie":
            - /url: https://academybugs.com/store/blue-hoodie/
        - text: $140.00 $111.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3381370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/blue-tshirt/
        - img "Blue Tshirt"
        - heading "Blue Tshirt" [level=3]:
          - link "Blue Tshirt":
            - /url: https://academybugs.com/store/blue-tshirt/
        - text: $79.92
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3481370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
        - img "Faint Washed Denim Blue Jeans"
        - heading "Faint Washed Denim Blue Jeans" [level=3]:
          - link "Faint Washed Denim Blue Jeans":
            - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
        - text: $117.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4681370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dark-blue-denim-jeans/
        - img "Dark Blue Denim Jeans"
        - heading "Dark Blue Denim Jeans" [level=3]:
          - link "Dark Blue Denim Jeans":
            - /url: https://academybugs.com/store/dark-blue-denim-jeans/
        - link "Login for Pricing":
          - /url: https://academybugs.com/account/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/boho-bangle-bracelet/
        - img "Boho Bangle Bracelet"
        - heading "Boho Bangle Bracelet" [level=3]:
          - link "Boho Bangle Bracelet":
            - /url: https://academybugs.com/store/boho-bangle-bracelet/
        - text: $185.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3681370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/heart-bracelet/
        - img "Silver Heart Bracelet"
        - heading "Silver Heart Bracelet" [level=3]:
          - link "Silver Heart Bracelet":
            - /url: https://academybugs.com/store/heart-bracelet/
        - text: $275.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3181370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/buddha-bracelet/
        - img "Buddha Bracelet"
        - heading "Buddha Bracelet" [level=3]:
          - link "Buddha Bracelet":
            - /url: https://academybugs.com/store/buddha-bracelet/
        - text: $107.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4081370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/light-brown-purse/
        - img "Light Brown Purse"
        - heading "Light Brown Purse" [level=3]:
          - link "Light Brown Purse":
            - /url: https://academybugs.com/store/light-brown-purse/
        - text: $77.04
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4981370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
        - img "Black Over-the-shoulder Handbag"
        - heading "Black Over-the-shoulder Handbag" [level=3]:
          - link "Black Over-the-shoulder Handbag":
            - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
        - text: $478.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3281370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/bright-red-bag/
        - img "Bright Red Bag"
        - heading "Bright Red Bag" [level=3]:
          - link "Bright Red Bag":
            - /url: https://academybugs.com/store/bright-red-bag/
        - text: $92.94
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3881370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/white-underground-tshirt/
        - img "White Underground Tshirt"
        - heading "White Underground Tshirt" [level=3]:
          - link "White Underground Tshirt":
            - /url: https://academybugs.com/store/white-underground-tshirt/
        - text: $136.12
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=5081370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
        - img "Bright Gold Purse With Chain"
        - heading "Bright Gold Purse With Chain" [level=3]:
          - link "Bright Gold Purse With Chain":
            - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
        - text: $124.53
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3781370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/fall-coat/
        - img "Fall Coat"
        - heading "Fall Coat" [level=3]:
          - link "Fall Coat":
            - /url: https://academybugs.com/store/fall-coat/
        - text: $189.95 $169.95
        - link "Select Options":
          - /url: https://academybugs.com/store/fall-coat/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/denim-coat/
        - img "Denim Coat"
        - heading "Denim Coat" [level=3]:
          - link "Denim Coat":
            - /url: https://academybugs.com/store/denim-coat/
        - text: $149.95 $109.95
        - link "Select Options":
          - /url: https://academybugs.com/store/denim-coat/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/professional-suit/
        - img "Professional Suit"
        - heading "Professional Suit" [level=3]:
          - link "Professional Suit":
            - /url: https://academybugs.com/store/professional-suit/
        - text: $279.95 $239.95
        - link "Select Options":
          - /url: https://academybugs.com/store/professional-suit/
    - paragraph
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
- text: ×
- heading "What did you find out?" [level=3]
- paragraph: What type of issue is it?
- radio "Functional"
- text: Functional
- radio "Visual"
- text: Visual
- radio "Content"
- text: Content
- radio "Performance"
- text: Performance
- radio "Crash"
- text: Crash
- paragraph: What should be the expected result?
- radio "The name of the product should be 'Gray Jeans' instead of 'Grey Jeans'"
- text: The name of the product should be 'Gray Jeans' instead of 'Grey Jeans'
- radio "Clicking on the jeans image should enlarge the image size"
- text: Clicking on the jeans image should enlarge the image size
- radio "The image background should be brown in color"
- text: The image background should be brown in color
- radio "The product image fills the box entirely just like all other product images"
- text: The product image fills the box entirely just like all other product images
- button "Submit"
```

# Test source

```ts
   1 | import {expect, test} from "@playwright/test";
   2 | import {
   3 |     MainPage,
   4 |     ProductsPage,
   5 |     ProductCard,
   6 |     RegisterPage,
   7 |     ForgotPasswordPage,
   8 |     UserCartPage,
   9 |     BugPopup,
   10 |     LoginPage,
   11 |     CookieConsentDialog,
   12 |     ResultPopup,
   13 |     BugInfoPopup,
   14 |     HintPopup
   15 | } from '../../services/pages'
   16 |
   17 | test.describe('Academy bugs Test', () => {
   18 |     let mainPage
   19 |     let productsPage
   20 |     let productCard
   21 |     let registerPage
   22 |     let forgotPasswordPage
   23 |     let userCartPage
   24 |     let bugPopup
   25 |     let loginPage
   26 |     let cookieConsentDialog
   27 |     let resultPopup
   28 |     let bugInfoPopup
   29 |     let hintPopup
   30 |     test.beforeEach(async ({page}) =>{
   31 |         mainPage = new MainPage(page);
   32 |         productsPage = new ProductsPage(page);
   33 |         productCard = new ProductCard(page);
   34 |         registerPage = new RegisterPage(page);
   35 |         forgotPasswordPage = new ForgotPasswordPage(page);
   36 |         userCartPage = new UserCartPage(page);
   37 |         bugPopup = new BugPopup(page);
   38 |         loginPage = new LoginPage(page);
   39 |         cookieConsentDialog = new CookieConsentDialog(page);
   40 |         resultPopup = new ResultPopup(page);
   41 |         bugInfoPopup = new BugInfoPopup(page);
   42 |         hintPopup = new HintPopup(page);
   43 |         await mainPage.openPage()
   44 |         await cookieConsentDialog.acceptAllCookies()
   45 |     })
   46 |
   47 |
   48 |     test('The product image fills the box entirely', {tag: ['@Medium', '@Visual']},async ({}) => {
   49 |         //Выбираем количество товаров на странице
   50 |         await productsPage.clickProductImage('4281370')
>  51 |         await expect(mainPage.nonCrashBugMessage).toBeVisible()
      |                                                   ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   52 |     })
   53 |
   54 |
   55 |     test('The page freezes when clicking on the numbers of results', {tag: ['@High', '@Crash']}, async ({}) => {
   56 |         //Выбираем количество товаров на странице
   57 |         await productsPage.selectPerPage(50)
   58 |         await expect(bugPopup.bugMessage).toBeVisible()
   59 |     })
   60 |
   61 |     test('The page freezes when changing the currency', {tag: ['@High', '@Crash']},async ({}) => {
   62 |         //Кликаем на товар
   63 |         await productsPage.clickProductItem('4481370')
   64 |         await productCard.selectCurrency('gbp')
   65 |         await expect(bugPopup.alternativeBugMessage).toBeVisible()
   66 |     })
   67 |
   68 |     test('The manufacturer link opens an error page', {tag: ['@Medium', '@Functional']},async ({}) => {
   69 |         await productsPage.clickProductItem('4481370')
   70 |         await productCard.clickManufacturerLink()
   71 |         await expect(bugPopup.nonCrashBugMessage).toBeVisible()
   72 |     })
   73 |
   74 |     test('There is too much space before the last letter in "Return to Store"', {tag: ['@Low', '@Content']},async ({}) => {
   75 |         await productsPage.clickProductItem('4481370')
   76 |         await productCard.clickAddToCartButton()
   77 |         await userCartPage.removeCartItem('DNK Yellow Shoes')
   78 |         await userCartPage.returnButtonClick()
   79 |         await expect(bugPopup.nonCrashBugMessage).toBeVisible()
   80 |     })
   81 |
   82 |     test('The page becomes unresponsive when clicking on "Post Comment"', {tag: ['@High', '@Crash']}, async ({}) => {
   83 |         await productsPage.clickProductItem('4481370')
   84 |         await productCard.fillProductReply()
   85 |         await expect(bugPopup.bugMessage).toBeVisible()
   86 |     })
   87 |
   88 |     test('The Sign In button overlaps the footer', {tag: ['@Low', '@Visual']}, async ({}) => {
   89 |         await productsPage.clickProductItem('4481370')
   90 |         await productCard.clickSignInButton()
   91 |         await expect(bugPopup.nonCrashBugMessage).toBeVisible()
   92 |     })
   93 |
   94 |     test('The caption of the Sign In button is misaligned vertically', {tag: ['@Low', '@Visual']}, async ({page}) => {
   95 |         await productsPage.clickProductItem('4481370')
   96 |         await productCard.clickSignInButton()
   97 |         await bugPopup.isPopupVisible()
   98 |         await bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
   99 |         await resultPopup.clickViewReportButton()
  100 |         await bugInfoPopup.closePopup()
  101 |         await hintPopup.closePopup()
  102 |         await loginPage.clickSignInButton()
  103 |         await page.waitForTimeout(10000)
  104 |         await expect(mainPage.nonCrashBugMessage).toBeVisible()
  105 |     })
  106 |
  107 |     test('The page becomes unresponsive when clicking on "Retrieve Password" and no email is sent', {tag: ['@High', '@Crash']},async ({}) => {
  108 |         await productsPage.clickProductItem('4481370')
  109 |         await productCard.clickSignUpLink()
  110 |         await registerPage.clickForgotPasswordLink()
  111 |         await forgotPasswordPage.fillRetrieveEmailField()
  112 |         await forgotPasswordPage.clickRetrievePasswordButton()
  113 |         await expect(bugPopup.bugMessage).toBeVisible()
  114 |     })
  115 |
  116 |     test('The text under the New User section is in another language', {tag: ['@Low', '@Content']}, async ({page}) => {
  117 |         await productsPage.clickProductItem('4481370')
  118 |         await productCard.clickSignInButton()
  119 |         await bugPopup.isPopupVisible()
  120 |         await bugPopup.fillPopup('Visual', 'The Sign In button should be above the footer')
  121 |         await resultPopup.clickViewReportButton()
  122 |         await bugInfoPopup.closePopup()
  123 |         await hintPopup.closePopup()
  124 |         await loginPage.clickNotRegisteredLinkLocator()
  125 |         await page.waitForTimeout(10000)
  126 |         await expect(bugPopup.popup).toBeVisible()
  127 |     })
  128 |
  129 |     test('When clicking on the update button the product quantity becomes 2 again', {tag: ['@High', '@Functional']}, async ({}) => {
  130 |         await productsPage.clickProductItem('4481370')
  131 |         await productCard.addToCart()
  132 |         await userCartPage.updateCartItemQuantity('DNK Yellow Shoes', 3)
  133 |         await expect(resultPopup.firstBugMessage).toBeVisible()
  134 |     })
  135 |
  136 |     test(' The page becomes unresponsive when increasing the quantity with the pink or green colors chosen', {tag: ['@High', '@Crash']}, async ({}) => {
  137 |         await productsPage.clickProductItem('4381370')
  138 |         await productCard.selectProductColor('Green')
  139 |         await productCard.increaseProductQuantity(1)
  140 |         await expect(bugPopup.bugMessage).toBeVisible()
  141 |     })
  142 | })
  143 |
  144 |
  145 |
```