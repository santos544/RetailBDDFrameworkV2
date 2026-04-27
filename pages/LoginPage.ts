// Import parent class
import { BasePage } from './BasePage'

// Export Login page class
export class LoginPage extends BasePage {

    // Username textbox locator
    username = '#user-name'

    // Password textbox locator
    password = '#password'

    // Login button locator
    loginButton = '#login-button'

    // Error message locator
    errorMessage = '[data-test="error"]'

    // Open login page
    async openLoginPage() {

        // Navigate to website
        await this.open('https://www.saucedemo.com')
    }

    // Enter username
    async enterUsername(value: string) {

        // Type username
        await this.type(this.username, value)
    }

    // Enter password
    async enterPassword(value: string) {

        // Type password
        await this.type(this.password, value)
    }

    // Click login button
    async clickLogin() {

        // Press button
        await this.click(this.loginButton)
    }

    // Full login reusable method
    async login(username: string, password: string) {

        // Open login page
        await this.openLoginPage()

        // Enter username
        await this.enterUsername(username)

        // Enter password
        await this.enterPassword(password)

        // Click login
        await this.clickLogin()
    }

    // Verify products page opened
    async isLoginSuccessful() {

        // Read current browser url
        const url = this.page.url()

        // Return true if inventory page
        return url.includes('inventory.html')
    }

    // Verify error displayed
    async isErrorDisplayed() {

        // Return visibility result
        return await this.isVisible(this.errorMessage)
    }
}