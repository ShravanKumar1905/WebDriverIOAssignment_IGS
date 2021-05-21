const Page = require('./page');

class signUpPage extends Page {

    get inputEmail() { return $('#email_create') }
    get createAccountBt() { return $('#SubmitCreate') }
    get MrRbt() { return $('#id_gender1') }
    get MrsRbt() { return $('#id_gender2') }
    get inputFname() { return $('#customer_firstname') }
    get inputLname() { return $('#customer_lastname') }
    get inputPassword() { return $('#passwd') }

    get inputDays() { return $('#days') }
    get inputMonths() { return $('#months') }
    get inputyears() { return $('#years') }

    get inputAddrFname() { return $('#firstname') }
    get inputAddrLname() { return $('#lastname') }
    get inputAddr() { return $('#address1') }
    get inputCity() { return $('#city') }
    get inputState() { return $('#id_state') }
    get inputPostcode() { return $('#postcode') }
    get inputCountry() { return $('#id_country') }
    get inputMobile() { return $('#phone_mobile') }
    get inputAlias() { return $('#alias') }

    get submitAccBt() { return $('#submitAccount') }
    get signInTitle() { return $("//h1[contains(text(),'Authentication')]") }
    get inputSignInEmail() { return $('#email') }
    get inputSignInPasswd() { return $('#passwd') }
    get SignInBt() { return $('#SubmitLogin') }
    
    emailAddr = "foo_" + +new Date() + "@gmail.com"

    async createAccount() {

        console.log(this.emailAddr)
        await (await this.inputEmail).setValue(this.emailAddr);
        await (await this.createAccountBt).click();
        await browser.pause(2000)
    }

    async enterAccountDetails(data) {
        console.log(data.rowsHash())

        if (data.rowsHash()['Title'] == "Mr") {
            await (await this.MrRbt).click();
        } else {
            await (await this.MrsRbt).click();
        }

        await (await this.inputFname).setValue(data.rowsHash()['Fname']);
        await (await this.inputLname).setValue(data.rowsHash()['Lname']);
        await (await this.inputPassword).setValue(data.rowsHash()['Password']);

        var days = data.rowsHash()['DOB'].split("-")[0];
        var month = data.rowsHash()['DOB'].split("-")[1];
        var years = data.rowsHash()['DOB'].split("-")[2];
        await (await this.inputDays).click();
        await (await $("//select[@id='days']/option[normalize-space(@value)='" + days + "']")).click();
        await (await this.inputMonths).click();
        await (await $("//select[@id='months']/option[contains(text(),'" + month + "')]")).click();
        await (await this.inputyears).click();
        await (await $("//select[@id='years']/option[normalize-space(@value)='" + years + "']")).click();

        await (await this.inputAddrFname).setValue(data.rowsHash()['Fname']);
        await (await this.inputAddrLname).setValue(data.rowsHash()['Lname']);
        await (await this.inputAddr).setValue(data.rowsHash()['Address']);
        await (await this.inputCity).setValue(data.rowsHash()['City']);

        await (await this.inputState).click()
        await (await $("//option[normalize-space(text())='" + data.rowsHash()['State'] + "']")).click();

        await (await this.inputPostcode).setValue(data.rowsHash()['Zipcode']);
        await (await this.inputMobile).setValue(data.rowsHash()['Mobile']);

        await browser.pause(2000)
    }

    async clickRegister() {
        await (await this.submitAccBt).click();
        await browser.pause(2000)
    }

    async verifysignInPage() {
        expect(await this.signInTitle).toBeDisplayed()
    }

    async signIn(data) {
        await (await this.inputSignInEmail).setValue(this.emailAddr)
        await (await this.inputSignInPasswd).setValue(data.hashes()[0].Password)
        await (await this.SignInBt).click()
        await browser.pause(2000)
    }
}

module.exports = new signUpPage();
