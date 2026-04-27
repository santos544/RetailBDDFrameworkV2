// Import cucumber step keywords
import { Given, When, Then } from '@cucumber/cucumber'

// Import Playwright assertions
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
// hooks.ts already launches correct browser by tag
import { getPage } from './hooks'

// Import products page object
import { ProductsPage } from '../pages/ProductsPage'

// Shared page object variable
let productsPage: ProductsPage

// Open products page
Given(
    'user opens products page',
    async function () {

        // Create products page object
        // Uses browser page created in hooks.ts
        productsPage =
            new ProductsPage(getPage())

        // Open products page flow
        // This usually performs login first, then lands on products page
        await productsPage.openProductsPage()
    })

// Verify products page title
Then(
    'products title should display',
    async function () {

        // Confirm page title contains Products
        expect(
            await productsPage.getTitle()
        ).toContain('Products')
    })

// Verify product list has items
Then(
    'product list should contain items',
    async function () {

        // Confirm at least one product exists
        expect(
            await productsPage.getProductCount()
        ).toBeGreaterThan(0)
    })

// Add first available product
When(
    'user adds first item',
    async function () {

        // Click Add To Cart on first product
        await productsPage.addFirstProduct()
    })

// Verify basket count is 1
Then(
    'basket badge should show 1',
    async function () {

        // Confirm basket badge shows one item
        expect(
            await productsPage.getBasketCount()
        ).toBe('1')
    })