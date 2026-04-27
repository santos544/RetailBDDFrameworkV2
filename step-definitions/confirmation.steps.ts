// Import cucumber step keywords
import { Given, Then } from '@cucumber/cucumber'

// Import Playwright assertion library
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts already launches browser based on tags
import { getPage } from './hooks'

// Import confirmation page object class
import { ConfirmationPage } from '../pages/ConfirmationPage'

// Shared confirmation page object variable
let confirm: ConfirmationPage

// Step: Open confirmation page
Given(
    'user opens confirmation page',
    async function () {

        // Create confirmation page object
        // Uses browser page already launched by hooks.ts
        confirm =
            new ConfirmationPage(getPage())

        // Open full order confirmation flow
        // This automatically chains:
        // Login > Products > Basket > Checkout > Delivery > Confirmation
        await confirm.openConfirmationPage()

        // Save success screenshot
        await confirm.saveSuccessScreenshot()
    })

// Step: Verify page title
Then(
    'confirmation title should display',
    async function () {

        // Confirm page title is correct
        expect(
            await confirm.getTitle()
        ).toContain('Checkout: Complete!')
    })

// Step: Verify thank you text
Then(
    'thank you text should display',
    async function () {

        // Confirm thank you message exists
        expect(
            await confirm.getThankYou()
        ).toContain('Thank you')
    })

// Step: Verify success image
Then(
    'success image should display',
    async function () {

        // Confirm success image is visible
        expect(
            await confirm.isImageVisible()
        ).toBeTruthy()
    })