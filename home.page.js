const Page = require('./page');

class HomePage extends Page {
    get logIn () { return $("//a[contains(text(),'Sign in')]") }
    
    async open () {
        return super.open()
    }

    async clickLogIn() {
        await (await this.logIn).click()
        //await browser.pause(5000)
    }
}

module.exports = new HomePage();
