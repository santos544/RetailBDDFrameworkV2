// Import Playwright page type
import { Page } from 'playwright'

// Export parent page class
export class BasePage {

    // Receive browser page
    constructor(protected page: Page) {}

    // Click reusable method
    async click(locator: string) {

        // Wait then click
        await this.page.click(locator)
    }

    // Fill reusable method
    async type(locator: string, value: string) {

        // Enter text
        await this.page.fill(locator, value)
    }

    // Read text reusable method
    async getText(locator: string) {

        // Return text
        return await this.page.textContent(locator)
    }

    // Check visible reusable method
    async isVisible(locator: string) {

        // Return true/false
        return await this.page.locator(locator).isVisible()
    }

    // Navigate reusable method
    async open(url: string) {

        // Open website
        await this.page.goto(url)
    }

    // Screenshot reusable method
    async screenshot(fileName: string) {

        // Save screenshot
        await this.page.screenshot({

            path: `screenshots/${fileName}`,

            fullPage: true
        })
    }
}