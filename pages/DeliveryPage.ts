// Import shared parent class
import { BasePage } from './BasePage'

// Import Checkout page
import { CheckoutPage } from './CheckoutPage'

// Export Delivery page class
export class DeliveryPage extends BasePage {

    // Payment information locator
    paymentInfo = '[data-test="payment-info-value"]'

    // Shipping information locator
    shippingInfo = '[data-test="shipping-info-value"]'

    // Tax label locator
    tax = '.summary_tax_label'

    // Total label locator
    total = '.summary_total_label'

    // Finish button locator
    finishButton = '#finish'

    // Cancel button locator
    cancelButton = '#cancel'

    // Title locator
    title = '.title'

    // Open overview page by calling Checkout page
    async openDeliveryPage() {

        // Create checkout object
        const checkout = new CheckoutPage(this.page)

        // Open checkout page
        await checkout.openCheckoutPage()

        // Fill details and continue
        await checkout.completeCheckoutInfo()
    }

    // Read payment text
    async getPaymentInfo() {

        // Return payment text
        return await this.getText(this.paymentInfo)
    }

    // Read shipping text
    async getShippingInfo() {

        // Return shipping text
        return await this.getText(this.shippingInfo)
    }

    // Read tax text
    async getTax() {

        // Return tax value
        return await this.getText(this.tax)
    }

    // Read total text
    async getTotal() {

        // Return total value
        return await this.getText(this.total)
    }

    // Click finish button
    async clickFinish() {

        // Complete order
        await this.click(this.finishButton)
    }

    // Click cancel button
    async clickCancel() {

        // Cancel order
        await this.click(this.cancelButton)
    }

    // Read page title
    async getTitle() {

        // Return title text
        return await this.getText(this.title)
    }
}