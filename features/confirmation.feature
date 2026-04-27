Feature: Confirmation Testing

  @ios
  Scenario: Successful order confirmation on iPhone Safari

    Given user opens confirmation page
    Then confirmation title should display
    And thank you text should display
    And success image should display

  @android
  Scenario: Successful order confirmation on Android Chrome

    Given user opens confirmation page
    Then confirmation title should display
    And thank you text should display
    And success image should display