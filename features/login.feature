Feature: Login Testing

  @smoke @ios
  Scenario: Successful login on iPhone Safari

    Given user opens login page
    When user enters valid login credentials
    Then products page should display

  @regression @android
  Scenario: Invalid login on Android Chrome

    Given user opens login page
    When user enters invalid login credentials
    Then login error should display