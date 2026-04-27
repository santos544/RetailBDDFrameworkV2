Feature: Product Details Testing

  @smoke @ios
  Scenario: View product details on iPhone Safari

    Given user opens product details page
    Then product image should display
    And product title should display
    And product description should display
    And product price should display

  @regression @android
  Scenario: Add item from details page on Android Chrome

    Given user opens product details page
    When user adds item from details page
    Then product details basket badge should show 1