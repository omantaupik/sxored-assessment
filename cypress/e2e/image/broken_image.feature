Feature: Broken Images Page
    As an User, I want to verify each images

  Background:
    Given already broken images page

  Scenario: User verify title name 'Broken Images'
    Then should title name broken images

  Scenario: User validate 'Broken Images'
    Then should display 3 images

  Scenario: User verify first image is broken
    Then first image should be broken

  Scenario: User verify second image is broken
    Then second image should be broken

  Scenario: User verify third image is success
    Then third image should load successfully

  Scenario: User verify images are load correctly
    Then all images should load in the DOM
