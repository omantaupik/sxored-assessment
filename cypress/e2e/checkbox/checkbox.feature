Feature: Checkbox Page
    As an User, I want to interact with the checkbox and successfully select the checkbox

  Background:
    Given already checkboxes page

  Scenario: User veify title name checkboxes
    Then should see title name checkboxes

  Scenario: User verify information <p> checkboxes
    Then should see information <p> checkboxes

  Scenario: User verify information <br> checkboxes
    Then should see information <br> checkboxes

  Scenario: User verify how to use checkboxes?
    Then should see how to use checkboxes

  Scenario: User validate 2 checkboxes
    Then should see 2 checkboxes

  Scenario: User successfully select first checkbox
    When user click the first checkbox
    Then first checkbox should be checked

  Scenario: User successfully unselect first checkbox
    When user click the first checkbox
    And user uncheck the first checkbox
    Then first checkbox should not be checked

  Scenario: User successfully select second checkbox
    Then second checkbox should be checked

  Scenario: User successfully unselect second checkbox
    When user click the second checkbox
    And user uncheck the second checkbox
    Then second checkbox should not be checked