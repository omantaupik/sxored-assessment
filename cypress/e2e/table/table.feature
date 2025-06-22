Feature: Dynamic Table Page
    As an User, I want to validate dynamic table value with real-time

  Background:
    Given already dynamic table page

  Scenario: User verify title name of 'Dynamic Table'
    Then display title name the dynamic table

  Scenario: User verify 'Dynamic Table' description
    Then display information the dynamic table

  Scenario: User verify title name of 'Scenario'
    Then display title name scenario

  Scenario: User verify 'Scenario' description
    Then display information scenario

  Scenario: User verify title name of 'Playground'
    Then display title name playground

  Scenario: User verify title name of 'Task Manager'
    Then display title name task manager

  Scenario: User verify the dynamic table
    Then display the dynamic table

  Scenario: User verify 'thead' the dynamic table
    Then display header the dynamic table

  Scenario: User verify table contains 5 rows
    Then table should have 5 rows headers

  Scenario: User verify table contains 4 columns
    Then table should have 4 column headers

  Scenario: User verify the table has Chrome row
    Then table should contain a row for "Chrome"

  Scenario: User validate CPU Header from Chrome in Real-time
    Then validate CPU value from Chrome

  Scenario: User validate Chrome CPU value in Real-time
    When display Chrome CPU above table
    And should match the Chrome CPU value in the label
