const { Given, When, Then } = require('@cucumber/cucumber');

const HomePage = require('../pageobjects/home.page');
const signupPage = require('../pageobjects/signup.page');
const myAccountPage = require('../pageobjects/myAccount.page');

const pages = {
    home: HomePage,
    signup: signupPage,
    myAccount: myAccountPage
}

Given(/^I am on the home page$/, async () => {
    await pages['home'].open()
});

Given(/^I goto the signup page$/, async () => {
    await pages['home'].clickSingIn()
});

Given(/^I enter email id to create an account$/, async () => {
    await pages['signup'].createAccount()
});

Given(/^I Enter following account details$/, async (table) => {
    await pages['signup'].enterAccountDetails(table)
});

Given(/^I click register$/, async () => {
    await pages['signup'].clickRegister()
});

Given(/^I should be logged-in$/, async (table) => {
    await pages['myAccount'].verifyMyAccTitle()
    await pages['myAccount'].verifyUserName(table)
});

Given(/^I am sign out from website$/, async () => {
    await pages['myAccount'].clicksignOut()
});

Given(/^sign in page should be displayed$/, async () => {
    await pages['signup'].verifysignInPage()
});

Given(/^I am sign in to website$/, async (table) => {
    await pages['signup'].signIn(table)
});

Given(/^I search for '([^"]*)' on website$/, async (productName) => {
    await pages['myAccount'].searchProduct(productName)
});

Given(/^I should see product related to (.+)$/, async (productName) => {
    await pages['myAccount'].verifySearchedProduct(productName)
});

Given(/^I add '([^"]*)' to cart$/, async (product) => {
    await pages['myAccount'].addToCart(product)
});

Given(/^Product '([^"]*)' should be successfully added to cart$/, async (product) => {
    await pages['myAccount'].verifyCart(product)
});

Given(/^I proceed to checkout$/, async () => {
    await pages['myAccount'].clickProceedToCheckout()
});

Given(/^I proceed to standard checkout$/, async () => {
    await pages['myAccount'].clickProceedToStandardCheckout()
});

Given(/^I proceess address$/, async () => {
    await pages['myAccount'].clickProcessAddress()
});

Given(/^I proceess carrier$/, async () => {
    await pages['myAccount'].clickProcessCarrier()
});

Given(/^I agree to term of services$/, async () => {
    await pages['myAccount'].checkTermsOfService()
});

Given(/^I Verify Payment details$/, async (table) => {
    await pages['myAccount'].verifyPaymentDetails(table)
});

