Feature: Payment Testing

  @ios
  Scenario: Verify payment method on iPhone Safari

    Given user opens payment page
    Then payment method should display

  @android
  Scenario: Verify payment method on Android Chrome

    Given user opens payment page
    Then payment method should display