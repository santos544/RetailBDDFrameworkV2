// Import cucumber step keywords
import { Given, Then } from '@cucumber/cucumber'

// Import Playwright assertion library
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts launches correct mobile device using tags
import { getPage } from './hooks'

// Import delivery page object
import { DeliveryPage } from '../pages/DeliveryPage'

// Shared delivery page object variable
let delivery: DeliveryPage

// Open delivery page
Given(
    'user opens delivery page',
    async function () {

        // Create delivery page object
        // Uses browser page already created in hooks.ts
        delivery =
            new DeliveryPage(getPage())

        // Open delivery page flow
        // Usually performs login > basket > checkout > delivery
        await delivery.openDeliveryPage()
    })

// Verify payment information is shown
Then(
    'payment info should display',
    async function () {

        // Confirm payment section has text
        expect(
            (await delivery.getPaymentInfo())?.length
        ).toBeGreaterThan(0)
    })

// Verify shipping information is shown
Then(
    'shipping info should display',
    async function () {

        // Confirm shipping section has text
        expect(
            (await delivery.getShippingInfo())?.length
        ).toBeGreaterThan(0)
    })

// Verify tax is displayed
Then(
    'tax should display',
    async function () {

        // Confirm tax label/value appears
        expect(
            await delivery.getTax()
        ).toContain('Tax')
    })

// Verify total is displayed
Then(
    'total should display',
    async function () {

        // Confirm total label/value appears
        expect(
            await delivery.getTotal()
        ).toContain('Total')
    })