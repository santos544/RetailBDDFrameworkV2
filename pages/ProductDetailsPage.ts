// Import reusable base page methods
// Example: click(), getText(), isVisible()
import { BasePage } from './BasePage'

// Import products page object
// Used to navigate from login → products → details page
import { ProductsPage } from './ProductsPage'

// Export class so step-definition files can import and use it
export class ProductDetailsPage extends BasePage {

    // Locator for first product name link
    firstProductLink = '#item_4_title_link'

    // Locator for product image
    image = '.inventory_details_img'

    // Locator for product title
    title = '.inventory_details_name'

    // Locator for product description
    description = '.inventory_details_desc'

    // Locator for product price
    price = '.inventory_details_price'

    // Locator for Add To Cart button
    addButton = 'button[data-test="add-to-cart"]'

    // Locator for basket badge number
    basketBadge = '.shopping_cart_badge'

    // Locator for Back To Products button
    backButton = '#back-to-products'

    // Open product details page
    async openProductDetailsPage() {

        // Create products page object
        const products =
            new ProductsPage(this.page)

        // Login and open products page first
        await products.openProductsPage()

        // Click first product to open details page
        await this.click(this.firstProductLink)
    }

    // Check if product image is visible
    async isImageVisible() {

        return await this.isVisible(this.image)
    }

    // Read product title text
    async getTitle() {

        return await this.getText(this.title)
    }

    // Read product description text
    async getDescription() {

        return await this.getText(this.description)
    }

    // Read product price text
    async getPrice() {

        return await this.getText(this.price)
    }

    // Add product to basket
    async addToBasket() {

        await this.click(this.addButton)
    }

    // Read basket badge number
    async getBasketCount() {

        return await this.getText(this.basketBadge)
    }

    // Click back button
    async goBack() {

        await this.click(this.backButton)
    }
}