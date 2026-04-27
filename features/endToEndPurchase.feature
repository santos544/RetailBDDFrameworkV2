Feature: Full Retail Purchase Flow

  @smoke @ios
  Scenario: Successful purchase on iPhone Safari

    Given user completes full purchase flow
    Then final confirmation page should display

  @regression @android
  Scenario: Successful purchase on Android Chrome

    Given user completes full purchase flow
    Then final confirmation page should display