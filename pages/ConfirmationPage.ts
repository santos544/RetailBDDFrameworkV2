// Import parent class
import { BasePage } from './BasePage'

// Import Delivery page
import { DeliveryPage } from './DeliveryPage'

// Export Confirmation page class
export class ConfirmationPage extends BasePage {

    // Title locator
    title = '.title'

    // Thank you header locator
    thankYou = '.complete-header'

    // Message locator
    message = '.complete-text'

    // Success image locator
    image = '.pony_express'

    // Back home button locator
    backHome = '#back-to-products'

    // Open confirmation page automatically
    async openConfirmationPage() {

        // Create delivery object
        const delivery = new DeliveryPage(this.page)

        // Open overview page
        await delivery.openDeliveryPage()

        // Click finish button
        await delivery.clickFinish()
    }

    // Read title text
    async getTitle() {

        // Return title
        return await this.getText(this.title)
    }

    // Read thank you text
    async getThankYou() {

        // Return thank you text
        return await this.getText(this.thankYou)
    }

    // Read message text
    async getMessage() {

        // Return body text
        return await this.getText(this.message)
    }

    // Check image visible
    async isImageVisible() {

        // Return image state
        return await this.isVisible(this.image)
    }

    // Click back home
    async clickBackHome() {

        // Return products page
        await this.click(this.backHome)
    }

    // Save screenshot
    async saveSuccessScreenshot() {

        // Capture screenshot
        await this.screenshot('confirmation-success.png')
    }
}