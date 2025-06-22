Feature: Should Match Assertions
    As an User, I want to Asserts that a value matches a particular regular expression

  Background:
    Given already should match page

  Scenario: User verify title match
    Then display title should match

  Scenario: User verify match description
    Then display information should match

  Scenario: User verify match card
    Then display card header of "\'value\'"
    And display card body of "input1 " and "This is our address ..."
