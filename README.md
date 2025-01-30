# Pathology Lab Management Test Automation

## Overview
This repository contains the test automation scripts for the Pathology Lab Management Web Application. The tests cover key functionalities including login, home page, cost calculator, patient creation, and test request creation.

## Project Setup

### Prerequisites
Before running the tests, ensure you have the following installed:

- **Node.js** and **npm**: You can download it from [Node.js website](https://nodejs.org/).
- **Git**: To clone the repository, if you haven't already installed it, you can download it from [Git website](https://git-scm.com/).

### Installing Dependencies

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/RathodPawan/pathology-lab-tests.git
   cd pathology-lab-tests
2.Install the required dependencies:
bash
npm install

**Running the Tests**
**1.Open Cypress Test Runner**:
You can open Cypress Test Runner in interactive mode by running:

bash
npx cypress open

This will open the Cypress interface, where you can select and run individual tests.

**2.Run tests in headless mode**:
To run all the tests in headless mode (without the graphical interface):

bash
npx cypress run

**Test Scenarios Covered**
**1.Login Page**:

**Verify the login form is visible**.
**Test login with valid credentials**.
**Test login with invalid credentials**.

**2.Home Page**:

**Verify the home page loads after successful login.**
**Verify the "Cost Calculator" section is accessible.**

**Cost Calculator**:

**Verify cost calculation for selected tests.**
**Verify the application of discounts.**
**Patient Creation & Test Requests:**

**Verify adding a new patient and creating a test request.**
**Verify that test requests are displayed in the list of todos on the home page.**

## Folder Structure

- **cypress/**: Contains all the Cypress test scripts and configurations.
  - **e2e/**: Folder for end-to-end test files.
  - **fixtures/**: Contains sample data used by the tests.
  - **support/**: Custom Cypress commands and support files.
- **package.json**: Contains project dependencies and scripts.
- **cypress.json**: Cypress configuration file.

## **Challenges Faced**

- **Handling Dynamic Content**: Some parts of the application, like the list of todos, are dynamically populated, so I used `cy.wait()` and `cy.intercept()` to handle delays and network requests.
- **Authentication**: I used Cypress commands to automate the login process and store session cookies to maintain authentication between tests.

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## **Contact**

If you have any questions or need further assistance, feel free to reach out!

- **Email**: [rathodpawan2712@gmail.com](mailto:rathodpawan2712@gmail.com)
- **GitHub**: [https://github.com/RathodPawan/pathology-lab-tests/](https://github.com/RathodPawan/pathology-lab-tests/)
