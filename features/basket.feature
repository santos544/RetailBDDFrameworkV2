Feature: Basket Testing

  @smoke @android
  Scenario: View basket page on Android Chrome

    Given user opens basket page
    Then basket item should display
    And basket quantity should be 1
    And basket price should display

  @regression @ios
  Scenario: Remove basket item on iPhone Safari

    Given user opens basket page
    When user removes basket item
    Then basket should be empty