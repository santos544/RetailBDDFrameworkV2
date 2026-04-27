// Import cucumber step keywords
import { Given, When, Then } from '@cucumber/cucumber'

// Import Playwright assertions
import { expect } from '@playwright/test'

// Import latest page getter from hooks
import { getPage } from './hooks'

// Import page object
import { CheckoutPage } from '../pages/CheckoutPage'

// Shared page object variable
let checkout: CheckoutPage

// Open checkout page
Given(
    'user opens checkout page',
    async function () {

        // Create checkout page using browser page from hooks
        checkout =
            new CheckoutPage(getPage())

        // Open checkout flow
        await checkout.openCheckoutPage()
    })

// Verify page title
Then(
    'checkout title should display',
    async function () {

        expect(
            await checkout.getTitle()
        ).toContain('Checkout')
    })

// Click continue with empty fields
When(
    'user clicks continue without data',
    async function () {

        await checkout.clickContinue()
    })

// Verify error shown
Then(
    'checkout error should display',
    async function () {

        expect(
            await checkout.isErrorVisible()
        ).toBeTruthy()
    })