Feature: Products Testing

  @smoke @android
  Scenario: View products page on Android Chrome

    Given user opens products page
    Then products title should display
    And product list should contain items

  @regression @ios
  Scenario: Add item to basket on iPhone Safari

    Given user opens products page
    When user adds first item
    Then basket badge should show 1