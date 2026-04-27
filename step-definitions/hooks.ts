// Import Cucumber lifecycle hooks:
// Before  = runs before every scenario
// After   = runs after every scenario
// setDefaultTimeout = changes the default step timeout limit
import {
    Before,
    After,
    setDefaultTimeout
} from '@cucumber/cucumber'

// Import our browser launcher utility class
import { BrowserFactory } from '../utils/BrowserFactory'

// Increase Cucumber default timeout from 5 seconds to 60 seconds
// Useful for slower browser launches, mobile emulation, page loads, etc.
setDefaultTimeout(60000)

// Shared Playwright page variable
// This stores the current browser page created in Before hook
let page: any

// Export function so step files can always get the latest page instance
// Better than exporting raw variable directly
export function getPage() {

    // Return active Playwright page
    return page
}

// Before hook runs automatically before every scenario
Before(async function (scenario) {

    // Print scenario name in terminal for visibility
    console.log(
        'Starting Scenario:',
        scenario.pickle.name
    )

    // Read all tags attached to current scenario
    // Example: @ios, @android, @safari
    const tags =
        scenario.pickle.tags.map(
            (tag: any) => tag.name
        )

    // If scenario has @ios tag
    if (tags.includes('@ios')) {

        // Launch iPhone Safari mobile browser
        page =
            await BrowserFactory.launchIphoneSafari()
    }

    // If scenario has @android tag
    else if (tags.includes('@android')) {

        // Launch Android Chrome mobile browser
        page =
            await BrowserFactory.launchAndroidChrome()
    }

    // If scenario has @safari tag
    else if (tags.includes('@safari')) {

        // Launch Safari desktop browser
        page =
            await BrowserFactory.launchSafari()
    }

    // If scenario has @firefox tag
    else if (tags.includes('@firefox')) {

        // Launch Firefox desktop browser
        page =
            await BrowserFactory.launchFirefox()
    }

// If no browser/device tag is provided in the feature file,
// use iPhone Safari as the default browser so tests run in mobile view
    else {

        // Launch iPhone Safari mobile browser
        // Store returned Playwright page into shared page variable
        page =
            await BrowserFactory.launchIphoneSafari()
    }
})

// After hook runs automatically after every scenario
After(async function (scenario) {

    // Check if scenario failed
    if (
        scenario.result?.status === 'FAILED'
    ) {

        // Confirm browser page still exists
        if (BrowserFactory.page) {

            // Take screenshot for debugging evidence
            await BrowserFactory.page.screenshot({

                // Save file using timestamp so name is unique
                path:
                    `screenshots/FAILED-${Date.now()}.png`,

                // Capture full page, not only visible screen
                fullPage: true
            })
        }
    }

    // Close browser after every scenario
    // Prevents leftover open browsers
    await BrowserFactory.closeBrowser()
})