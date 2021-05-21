Feature: Signup to My Store, Do login and Buy a Product

    Scenario: As a user, I can signup to website
        Given I am on the home page
        And I goto the signup page
        And I enter email id to create an account
        And I Enter following account details
            | Title    | Mr             |
            | Fname    | Vin            |
            | Lname    | Disel          |
            | Password | vin@123        |
            | DOB      | 3-January-1991 |
            | Address  | Time Squre     |
            | City     | New York       |
            | State    | Hawaii         |
            | Zipcode  | 40111          |
            | Mobile   | 1234567890     |
        When I click register
        Then I should be logged-in
            | Fname | Lname |
            | Vin   | Disel |

    Scenario: As a user, I can sign out
        When I am sign out from website
        Then sign in page should be displayed

    Scenario: As a user, I can sign in
        When I am sign in to website
            | Password |
            | vin@123  |
        Then I should be logged-in
            | Fname | Lname |
            | Vin   | Disel |

    Scenario: As a user, I can Search Product
        Given I search for 'Faded Short Sleeve T-shirts' on website
        Then I should see product related to "Faded Short Sleeve T-shirts"

    Scenario: As a user, I can add Produc to cart
        Given I add 'Faded Short Sleeve T-shirts' to cart
        Then Product 'Faded Short Sleeve T-shirts' should be successfully added to cart

    Scenario: As a user, I can proceed to checkout
        Given I proceed to checkout
        Then I proceed to standard checkout
        And I proceess address
        And I agree to term of services
        And I proceess carrier
        Then I Verify Payment details
            | TotalProduct | TotalShipping | TotalPriceWithoutTax | Tax   | TotalPrice |
            | $16.51       | $2.00         | $18.51               | $0.74 | $19.25     |
