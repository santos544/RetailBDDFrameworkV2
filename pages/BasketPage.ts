// Import parent class
import { BasePage } from './BasePage'

// Import products page
import { ProductsPage } from './ProductsPage'

// Export class
export class BasketPage extends BasePage {

    // Basket icon
    basketIcon = '.shopping_cart_link'

    // Cart item row
    item = '.cart_item'

    // Quantity
    quantity = '.cart_quantity'

    // Price
    price = '.inventory_item_price'

    // Remove button
    removeButton =
        'button[data-test="remove-sauce-labs-backpack"]'

    // Continue shopping
    continueShopping = '#continue-shopping'

    // Checkout button
    checkoutButton = '#checkout'

    // Title
    title = '.title'

    // Open basket page automatically
    async openBasketPage() {

        // Create products page
        const products =
            new ProductsPage(this.page)

        // Login and open products
        await products.openProductsPage()

        // Add first item
        await products.addFirstProduct()

        // Open basket icon
        await this.click(this.basketIcon)
    }

    // Verify product visible
    async isItemVisible() {

        return await this.isVisible(this.item)
    }

    // Read quantity
    async getQuantity() {

        return await this.getText(this.quantity)
    }

    // Read price
    async getPrice() {

        return await this.getText(this.price)
    }

    // Remove item
    async removeItem() {

        await this.click(this.removeButton)
    }

    // Count items
    async getItemCount() {

        return await this.page
            .locator(this.item)
            .count()
    }

    // Continue shopping
    async clickContinueShopping() {

        await this.click(this.continueShopping)
    }

    // Checkout
    async clickCheckout() {

        await this.click(this.checkoutButton)
    }

    // Read title
    async getTitle() {

        return await this.getText(this.title)
    }
}