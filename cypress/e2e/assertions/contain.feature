Feature: Assertions on should contain page
    As an User, I want to Asserts that a string includes a particular substring

  Background:
    Given already should contain page

  Scenario: User verify title contain
    Then display title should contain

  Scenario: User verify contain description
    Then display information should contain

  Scenario: User verify contain card
    Then display card header of "\'value\'"
    And display card body of "input1 " and "This is our address ..."


