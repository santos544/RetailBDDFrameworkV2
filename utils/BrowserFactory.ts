// Import Playwright browser engines, device presets, and types
import {
    chromium,       // Chrome / Edge browser engine
    firefox,        // Firefox browser engine
    webkit,         // Safari browser engine
    devices,        // Built-in real mobile device profiles
    Browser,        // Browser object type
    BrowserContext, // Browser session type
    Page            // Browser tab/page type
} from 'playwright'

// Export reusable utility class
// This class is responsible for launching browsers
export class BrowserFactory {

    // Shared browser instance
    // Holds the main browser window/process
    static browser: Browser

    // Shared browser context
    // Stores cookies, sessions, cache, local storage
    static context: BrowserContext

    // Shared page object
    // Represents one browser tab
    static page: Page

    // --------------------------------------------------
    // Launch Chrome Desktop Browser
    // --------------------------------------------------
    static async launchChrome() {

        // Start Chromium browser
        this.browser =
            await chromium.launch({

                // If running in GitHub Actions CI:
                // process.env.CI exists = true
                // Browser runs hidden (headless)

                // If running locally on your PC:
                // CI usually does not exist
                // Browser opens visibly

                // This gives one framework for:
                // Local machine = visible browser
                // CI pipeline   = hidden browser
                headless: process.env.CI ? true : false
            })

        // Create fresh clean browser session
        this.context =
            await this.browser.newContext()

        // Open new browser tab
        this.page =
            await this.context.newPage()

        // Return page for tests
        return this.page
    }

    // --------------------------------------------------
    // Launch Firefox Desktop Browser
    // --------------------------------------------------
    static async launchFirefox() {

        // Start Firefox browser
        this.browser =
            await firefox.launch({

                // Auto switch:
                // CI server = hidden browser
                // Local PC  = visible browser
                headless: process.env.CI ? true : false
            })

        // Create new isolated session
        this.context =
            await this.browser.newContext()

        // Open tab
        this.page =
            await this.context.newPage()

        // Return page object
        return this.page
    }

    // --------------------------------------------------
    // Launch Safari Desktop Browser
    // --------------------------------------------------
    static async launchSafari() {

        // Start WebKit engine (Safari)
        this.browser =
            await webkit.launch({

                // Hidden in CI
                // Visible locally
                headless: process.env.CI ? true : false
            })

        // Create session
        this.context =
            await this.browser.newContext()

        // Open new tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Launch iPhone Safari Mobile Browser
    // --------------------------------------------------
    static async launchIphoneSafari() {

        // Start Safari engine
        this.browser =
            await webkit.launch({

                // Hidden in GitHub CI
                // Visible on your laptop
                headless: process.env.CI ? true : false
            })

        // Use real iPhone 14 mobile profile
        // Includes:
        // screen size
        // mobile touch mode
        // Safari user-agent
        this.context =
            await this.browser.newContext({

                ...devices['iPhone 14']
            })

        // Open mobile tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Launch Android Chrome Mobile Browser
    // --------------------------------------------------
    static async launchAndroidChrome() {

        // Start Chromium browser
        this.browser =
            await chromium.launch({

                // Hidden in CI
                // Visible locally
                headless: process.env.CI ? true : false
            })

        // Use Pixel 7 mobile profile
        // Simulates Android Chrome device
        this.context =
            await this.browser.newContext({

                ...devices['Pixel 7']
            })

        // Open mobile tab
        this.page =
            await this.context.newPage()

        // Return page
        return this.page
    }

    // --------------------------------------------------
    // Close Browser Safely
    // --------------------------------------------------
    static async closeBrowser() {

        // Only close if browser exists
        if (this.browser) {

            // Shut browser completely
            await this.browser.close()
        }

        // Clear old references
        // Prevent stale memory objects
        this.browser = null as any
        this.context = null as any
        this.page = null as any
    }
}