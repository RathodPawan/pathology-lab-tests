describe('Pathology Lab Management Tests', () => {
  
  // Custom login command
  Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://gor-pathology.web.app/');

    // Ensure the username input is visible and then type the username
    cy.get('input[name="username"]').should('be.visible').type(username);
    cy.get('input[name="password"]').should('be.visible').type(password);
    cy.get('button[type="submit"]').should('be.visible').click();
  });

  // Test Case 1: Login with valid credentials
  it('should login with valid credentials', () => {
    cy.login('test@kennect.io', 'Qwerty@1234');
    
    // After login, verify landing on the homepage/dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });

  // Test Case 2: Login with invalid credentials
  it('should show error for invalid credentials', () => {
    cy.login('invalid@kennect.io', 'InvalidPassword');
    
    // Check for error message after failed login attempt
    cy.get('.error-message').should('be.visible').and('contain', 'Invalid credentials');
  });

  // Test Case 3: Cost Calculator - Should calculate the correct cost for selected tests
  it('should calculate the correct cost for selected tests', () => {
    cy.login('test@kennect.io', 'Qwerty@1234');
    
    // Navigate to Cost Calculator
    cy.contains('Cost Calculator').click();
    
    // Select tests and verify the cost calculation
    cy.get('input[name="test1"]').check();
    cy.get('input[name="test2"]').check();
    
    // Apply a discount and verify the final price
    cy.get('input[name="discount"]').type('10');
    cy.get('button[type="submit"]').click();

    // Check if the calculated cost is displayed
    cy.contains('Total cost').should('be.visible');
  });

  // Test Case 4: Add Patient and Create Test Request
  it('should allow adding a new patient', () => {
    cy.login('test@kennect.io', 'Qwerty@1234');
    
    // Navigate to Add Patient page
    cy.contains('Add Patient').click();
    
    // Fill in patient details
    cy.get('input[name="patientName"]').type('John Doe');
    cy.get('input[name="patientAge"]').type('30');
    cy.get('input[name="patientGender"]').select('Male');
    
    // Submit the form to create a test request
    cy.get('button[type="submit"]').click();
    
    // Verify the patient is added and a test request is created
    cy.contains('Patient added successfully').should('be.visible');
  });

  // Test Case 5: Should apply discounts correctly
  it('should apply discounts correctly', () => {
    cy.login('test@kennect.io', 'Qwerty@1234');
    
    // Navigate to the cost calculator
    cy.contains('Cost Calculator').click();
    
    // Select some tests and apply a discount
    cy.get('input[name="test1"]').check();
    cy.get('input[name="test2"]').check();
    cy.get('input[name="discount"]').type('15');
    cy.get('button[type="submit"]').click();
    
    // Verify the discount is applied
    cy.contains('Total after discount').should('be.visible');
  });

  // Additional Test Case: Logout and verify
  it('should logout correctly', () => {
    cy.login('test@kennect.io', 'Qwerty@1234');
    
    // Log out from the application
    cy.contains('Logout').click();
    
    // Verify the user is logged out and redirected to the login page
    cy.url().should('eq', 'https://gor-pathology.web.app/');
    cy.get('input[name="username"]').should('be.visible');
  });
});

