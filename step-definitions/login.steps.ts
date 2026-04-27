// Import cucumber step keywords
import { Given, When, Then } from '@cucumber/cucumber'

// Import Playwright assertions
import { expect } from '@playwright/test'

// Import shared page getter from hooks.ts
import { getPage } from './hooks'

// Import login page object
import { LoginPage } from '../pages/LoginPage'

// Shared page object variable
let loginPage: LoginPage

// Open login page
Given(
    'user opens login page',
    async function () {

        // Create login page object
        // Uses browser already launched by hooks.ts
        loginPage =
            new LoginPage(getPage())

        // Open login page
        await loginPage.openLoginPage()
    })

// Enter valid credentials
When(
    'user enters valid login credentials',
    async function () {

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        )
    })

// Enter invalid credentials
When(
    'user enters invalid login credentials',
    async function () {

        await loginPage.login(
            'wrong_user',
            'wrong_pass'
        )
    })

// Verify successful login
Then(
    'products page should display',
    async function () {

        expect(
            await loginPage.isLoginSuccessful()
        ).toBeTruthy()
    })

// Verify login error
Then(
    'login error should display',
    async function () {

        expect(
            await loginPage.isErrorDisplayed()
        ).toBeTruthy()
    })