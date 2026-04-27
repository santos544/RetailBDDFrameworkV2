// Import cucumber step keywords
import { Given, When, Then } from '@cucumber/cucumber'

// Import Playwright assertion library
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts launches browser based on tags
import { getPage } from './hooks'

// Import basket page object
import { BasketPage } from '../pages/BasketPage'

// Shared basket page object variable
let basket: BasketPage

// Open basket page
Given(
    'user opens basket page',
    async function () {

        // Create basket page object
        // Uses browser page already opened in hooks.ts
        basket =
            new BasketPage(getPage())

        // Open basket page flow
        // Usually performs login > products > add item > basket
        await basket.openBasketPage()
    })

// Verify basket item is visible
Then(
    'basket item should display',
    async function () {

        // Confirm product row exists in basket
        expect(
            await basket.isItemVisible()
        ).toBeTruthy()
    })

// Verify quantity equals 1
Then(
    'basket quantity should be 1',
    async function () {

        // Confirm basket quantity value
        expect(
            await basket.getQuantity()
        ).toBe('1')
    })

// Verify price is shown
Then(
    'basket price should display',
    async function () {

        // Confirm price contains currency symbol
        expect(
            await basket.getPrice()
        ).toContain('$')
    })

// Remove item from basket
When(
    'user removes basket item',
    async function () {

        // Click remove button
        await basket.removeItem()
    })

// Verify basket is empty
Then(
    'basket should be empty',
    async function () {

        // Confirm no basket items remain
        expect(
            await basket.getItemCount()
        ).toBe(0)
    })