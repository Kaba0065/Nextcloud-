@apache
Feature: app-theming

# FIXME test with cypress
# The existing DOM testing framework used here is not fully suitable for testing UIs implemented with modern frontend frameworks like Vue

  Scenario: changing the color updates the primary color
    Given I am logged in as the admin
    And I visit the admin settings page
    And I open the "Theming" section
    # The "eventually" part is not really needed here, as the colour is not
    # being animated at this point, but there is no need to create a specific
    # step just for this.
    And I see that the primary color is eventually "#006aa3"
    And I see that the non-plain background color variable is eventually "#0082c9"
    When I set the "Color" parameter in the Theming app to "#C9C9C9"
    Then I see that the parameters in the Theming app are eventually saved
    And I see that the primary color is eventually "#006aa3"
    And I see that the non-plain background color variable is eventually "#C9C9C9"

  Scenario: resetting the color updates the primary color
    Given I am logged in as the admin
    And I visit the admin settings page
    And I open the "Theming" section
    And I set the "Color" parameter in the Theming app to "#C9C9C9"
    And I see that the parameters in the Theming app are eventually saved
    And I see that the primary color is eventually "#006aa3"
    And I see that the non-plain background color variable is eventually "#C9C9C9"
    When I reset the "Color" parameter in the Theming app to its default value
    Then I see that the parameters in the Theming app are eventually saved
    And I see that the primary color is eventually "#006aa3"
    And I see that the non-plain background color variable is eventually "#0082c9"
