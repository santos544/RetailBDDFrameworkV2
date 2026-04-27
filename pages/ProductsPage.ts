// Import parent class
import { BasePage } from './BasePage'

// Import Login page
import { LoginPage } from './LoginPage'

// Export Products page class
export class ProductsPage extends BasePage {

    // Page title locator
    title = '.title'

    // Product items locator
    items = '.inventory_item'

    // First add to basket button
    firstAddButton =
        'button[data-test="add-to-cart-sauce-labs-backpack"]'

    // Basket badge locator
    basketBadge = '.shopping_cart_badge'

    // Sort dropdown locator
    sortDropdown = '.product_sort_container'

    // Open products page by calling LoginPage
    async openProductsPage() {

        // Create Login page object
        const loginPage = new LoginPage(this.page)

        // Perform reusable login
        await loginPage.login(
            'standard_user',
            'secret_sauce'
        )
    }

    // Read page title
    async getTitle() {

        // Return title text
        return await this.getText(this.title)
    }

    // Count products
    async getProductCount() {

        // Return total products
        return await this.page.locator(this.items).count()
    }

    // Add first product
    async addFirstProduct() {

        // Click add button
        await this.click(this.firstAddButton)
    }

    // Read basket badge
    async getBasketCount() {

        // Return badge text
        return await this.getText(this.basketBadge)
    }

    // Sort products A-Z
    async sortNameAZ() {

        // Select option value
        await this.page.selectOption(
            this.sortDropdown,
            'az'
        )
    }

    // Verify dropdown visible
    async isSortVisible() {

        // Return true/false
        return await this.isVisible(this.sortDropdown)
    }
}