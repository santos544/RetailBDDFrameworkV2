// Import shared parent page class
import { BasePage } from './BasePage'

// Import Basket page class
import { BasketPage } from './BasketPage'

// Export Checkout page class
export class CheckoutPage extends BasePage {

    // First name field locator
    firstName = '#first-name'

    // Last name field locator
    lastName = '#last-name'

    // Postal code field locator
    postalCode = '#postal-code'

    // Continue button locator
    continueButton = '#continue'

    // Cancel button locator
    cancelButton = '#cancel'

    // Error message locator
    error = '[data-test="error"]'

    // Shared page title locator
    title = '.title'

    // Open checkout page by calling Basket page
    async openCheckoutPage() {

        // Create Basket page object
        const basket = new BasketPage(this.page)

        // Basket page prepares itself
        await basket.openBasketPage()

        // Click checkout button
        await basket.clickCheckout()
    }

    // Enter first name value
    async enterFirstName(value: string) {

        // Type first name
        await this.type(this.firstName, value)
    }

    // Enter last name value
    async enterLastName(value: string) {

        // Type surname
        await this.type(this.lastName, value)
    }

    // Enter postal code value
    async enterPostalCode(value: string) {

        // Type postcode
        await this.type(this.postalCode, value)
    }

    // Click continue button
    async clickContinue() {

        // Press continue
        await this.click(this.continueButton)
    }

    // Click cancel button
    async clickCancel() {

        // Press cancel
        await this.click(this.cancelButton)
    }

    // Complete form using one method
    async completeCheckoutInfo() {

        // Enter first name
        await this.enterFirstName('Anthony')

        // Enter last name
        await this.enterLastName('Tester')

        // Enter postcode
        await this.enterPostalCode('M33')

        // Continue next page
        await this.clickContinue()
    }

    // Read page title text
    async getTitle() {

        // Return title
        return await this.getText(this.title)
    }

    // Check error visible
    async isErrorVisible() {

        // Return true or false
        return await this.isVisible(this.error)
    }
}