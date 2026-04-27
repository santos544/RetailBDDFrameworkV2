// Import parent class
import { BasePage } from './BasePage'

// Import Delivery page
import { DeliveryPage } from './DeliveryPage'

// Export Payment page class
export class PaymentPage extends BasePage {

    // Reuse payment info locator
    paymentInfo = '[data-test="payment-info-value"]'

    // Open payment stage
    async openPaymentPage() {

        // Create delivery object
        const delivery = new DeliveryPage(this.page)

        // Open overview page
        await delivery.openDeliveryPage()
    }

    // Read payment method
    async getPaymentMethod() {

        // Return payment text
        return await this.getText(this.paymentInfo)
    }
}