Feature: Delivery Testing

  @android
  Scenario: View delivery overview on Android Chrome

    Given user opens delivery page
    Then payment info should display
    And shipping info should display
    And tax should display
    And total should display

  @ios
  Scenario: View delivery overview on iPhone Safari

    Given user opens delivery page
    Then payment info should display
    And shipping info should display
    And tax should display
    And total should display