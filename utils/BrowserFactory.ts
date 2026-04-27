// Import Playwright browser engines, device presets, and types
import {
    chromium,       // Chrome / Edge engine
    firefox,        // Firefox engine
    webkit,         // Safari engine
    devices,        // Built-in real device profiles
    Browser,        // Browser type
    BrowserContext, // Context type
    Page            // Page/tab type
} from 'playwright'

// Export reusable browser utility class
export class BrowserFactory {

    // Shared browser instance
    // Used globally so hooks and steps can access same browser
    static browser: Browser

    // Shared browser context
    // Context stores cookies, sessions, local storage, etc.
    static context: BrowserContext

    // Shared browser page/tab
    static page: Page

    // --------------------------------------------------
    // Launch Chrome Desktop Browser
    // --------------------------------------------------
    static async launchChrome() {

        // Launch Chromium browser window
        this.browser =
            await chromium.launch({

                // false = visible browser
                headless: false
            })

        // Create fresh browser context
        this.context =
            await this.browser.newContext()

        // Open new browser tab
        this.page =
            await this.context.newPage()

        // Return Playwright page object
        return this.page
    }

    // --------------------------------------------------
    // Launch Firefox Desktop Browser
    // --------------------------------------------------
    static async launchFirefox() {

        // Launch Firefox browser
        this.browser =
            await firefox.launch({

                // Show browser window
                headless: false
            })

        // Create isolated session
        this.context =
            await this.browser.newContext()

        // Open new tab
        this.page =
            await this.context.newPage()

        // Return page object
        return this.page
    }

    // --------------------------------------------------
    // Launch Safari Desktop Browser
    // --------------------------------------------------
    static async launchSafari() {

        // Launch WebKit (Safari engine)
        this.browser =
            await webkit.launch({

                // Show browser
                headless: false
            })

        // Create browser session
        this.context =
            await this.browser.newContext()

        // Open tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Launch iPhone Safari Mobile Browser
    // --------------------------------------------------
    static async launchIphoneSafari() {

        // Launch Safari engine
        this.browser =
            await webkit.launch({

                // Show browser
                headless: false
            })

        // Use real Playwright iPhone profile
        // Better than manual viewport only
        this.context =
            await this.browser.newContext({

                ...devices['iPhone 14']
            })

        // Open tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Launch Android Chrome Mobile Browser
    // --------------------------------------------------
    static async launchAndroidChrome() {

        // Launch Chromium browser
        this.browser =
            await chromium.launch({

                // Show browser
                headless: false
            })

        // Use Pixel / Android style profile
        this.context =
            await this.browser.newContext({

                ...devices['Pixel 7']
            })

        // Open new tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Close Browser Safely
    // --------------------------------------------------
    static async closeBrowser() {

        // Check browser exists first
        if (this.browser) {

            // Close browser completely
            await this.browser.close()
        }

        // Clear old references
        // Prevent stale objects or leftover windows
        this.browser = null as any
        this.context = null as any
        this.page = null as any
    }
}