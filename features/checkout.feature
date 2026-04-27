Feature: Checkout Testing

  @ios
  Scenario: Open checkout page on iPhone Safari

    Given user opens checkout page
    Then checkout title should display

  @android
  Scenario: Validate empty checkout form on Android Chrome

    Given user opens checkout page
    When user clicks continue without data
    Then checkout error should display

  @ios
  Scenario: Open checkout page again on iPhone Safari

    Given user opens checkout page
    Then checkout title should display