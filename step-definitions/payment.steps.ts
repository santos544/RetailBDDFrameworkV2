// Import cucumber step keywords
import { Given, Then } from '@cucumber/cucumber'

// Import Playwright assertions
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts already launches correct browser by tag
import { getPage } from './hooks'

// Import payment page object
import { PaymentPage } from '../pages/PaymentPage'

// Shared payment page object variable
let payment: PaymentPage

// Open payment page
Given(
    'user opens payment page',
    async function () {

        // Create payment page object
        // Uses browser page already launched by hooks.ts
        payment =
            new PaymentPage(getPage())

        // Open payment flow
        // This automatically chains previous pages
        await payment.openPaymentPage()
    })

// Verify payment method appears
Then(
    'payment method should display',
    async function () {

        // Confirm payment text exists
        expect(
            (await payment.getPaymentMethod())?.length
        ).toBeGreaterThan(0)
    })