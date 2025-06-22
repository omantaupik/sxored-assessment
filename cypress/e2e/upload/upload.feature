Feature: File Upload Functionality
    As as User, I want to upload or drag and drop .xlsx file

  Background:
    Given already upload page

  Scenario: User verify title name upload file
    Then title name upload should be displayed

  Scenario: User verify text warning upload file
    Then text warning upload should be displayed

  Scenario: User verify upload or drag and drop file description
    Then information upload should be displayed

  Scenario: User verify form file input
    Then form upload should be visible

  Scenario: User verify upload button
    Then upload button should be visible

  Scenario: User validate file input .xlsx
    When select "sxored.xlsx" file
    Then file should be displayed

  Scenario: User validate upload .xlsx file
    When select "sxored.xlsx" file
    And click the upload button
    Then uploaded file successfully

  Scenario: User validate upload with size more than 500KB
    When select "sxoredsize.xlsx" file
    And click the upload button
    Then file error uploaded

  Scenario: User no file should be uploaded
    When click the upload button
    Then display error file validation

  Scenario: User validate input file with drag and drop
    When drag and drop "sxored.xlsx" file
    Then file should be displayed

  Scenario: User validate drag and drop .xlsx file upload
    When drag and drop "sxored.xlsx" file
    And click the upload button
    Then uploaded file successfully

  Scenario: User validate drag and drop with size more than 500KB
    When drag and drop "sxoredsize.xlsx" file
    And click the upload button
    Then file error uploaded