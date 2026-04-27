// Import cucumber step keywords
// Given = starting action
// Then  = verification action
import { Given, Then } from '@cucumber/cucumber'

// Import Playwright assertion library
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts launches correct browser/device using tags
import { getPage } from './hooks'

// Import final page object
// Confirmation page represents successful order page
import { ConfirmationPage } from '../pages/ConfirmationPage'

// Shared page object variable
let confirmation: ConfirmationPage

// Step: Complete full purchase flow
Given(
    'user completes full purchase flow',
    async function () {

        // Create confirmation page object
        // Uses browser already launched in hooks.ts
        confirmation =
            new ConfirmationPage(getPage())

        // Run complete purchase journey:
        // Login → Products → Basket → Checkout
        // → Delivery → Payment → Confirmation
        await confirmation.openConfirmationPage()

        // Save screenshot of successful purchase
        await confirmation.saveSuccessScreenshot()
    })

// Step: Verify final confirmation page
Then(
    'final confirmation page should display',
    async function () {

        // Verify final page title
        expect(
            await confirmation.getTitle()
        ).toContain('Checkout: Complete!')

        // Verify thank you message
        expect(
            await confirmation.getThankYou()
        ).toContain('Thank you')
    })