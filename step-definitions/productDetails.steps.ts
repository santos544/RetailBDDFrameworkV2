// Import cucumber step keywords
import { Given, When, Then } from '@cucumber/cucumber'

// Import Playwright assertions
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
import { getPage } from './hooks'

// Import page object
import { ProductDetailsPage } from '../pages/ProductDetailsPage'

// Shared page object variable
let details: ProductDetailsPage

// Open product details page
Given(
    'user opens product details page',
    async function () {

        // Use browser already launched by hooks.ts
        details =
            new ProductDetailsPage(getPage())

        // Open page flow
        await details.openProductDetailsPage()
    })

// Verify image visible
Then(
    'product image should display',
    async function () {

        expect(
            await details.isImageVisible()
        ).toBeTruthy()
    })

// Verify title exists
Then(
    'product title should display',
    async function () {

        expect(
            (await details.getTitle())?.length
        ).toBeGreaterThan(0)
    })

// Verify description exists
Then(
    'product description should display',
    async function () {

        expect(
            (await details.getDescription())?.length
        ).toBeGreaterThan(0)
    })

// Verify price shown
Then(
    'product price should display',
    async function () {

        expect(
            await details.getPrice()
        ).toContain('$')
    })

// Add product to basket
When(
    'user adds item from details page',
    async function () {

        await details.addToBasket()
    })

// Verify basket count
Then(
    'product details basket badge should show 1',
    async function () {

        expect(
            await details.getBasketCount()
        ).toBe('1')
    })