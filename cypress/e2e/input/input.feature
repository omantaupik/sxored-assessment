Feature: Inputs Page Functionality
    As an User, I want to validate input number, text, password, and date

  Background:
    Given already web inputs page

  Scenario: User verify title web inputs
    Then title name web inputs should be displayed

  Scenario: User verify web inputs description
    Then information web inputs should be displayed

  Scenario: User verify display input button
    Then display input button should be visible

  Scenario: User verify clear input button
    Then clear input button should be visible

  Scenario: User verify input number
    When fill number "123"
    Then input number field should "123"

  Scenario: User validate input number
    When fill "12345" number field
    And click "Display Inputs" button
    Then output number should be displayed

  Scenario: User verify input text
    When fill text "sxored"
    Then input text field should "sxored"

  Scenario: User validate input text
    When fill "sxored" text field
    And click "Display Inputs" button
    Then output text should be displayed

  Scenario: User verify input password
    When fill password "sxored2025"
    Then input password field should "sxored2025"

  Scenario: User validate input password
    When fill "sxored2025" password field
    And click "Display Inputs" button
    Then output password should be displayed

  Scenario: User verify input date
    When fill date "2025-06-22"
    Then input date field should "2025-06-22"

  Scenario: User validate input date
    When fill "2025-06-22" date field
    And click "Display Inputs" button
    Then output date should be displayed

  Scenario: User validate all inputs
    When fill "12345" number field
    And fill "sxored" text field
    And fill "sxored2025" password field
    And fill "2025-06-22" date field
    And click "Display Inputs" button
    Then outputs should all be displayed
