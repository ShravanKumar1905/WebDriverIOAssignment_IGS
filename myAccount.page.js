const Page = require('./page');

class MyAccount extends Page {
    get myAccountTitle() { return $("//p[contains(text(),'Welcome to your account.')]") }
    get signOut() { return $("//a[contains(text(),'Sign out')]") }
    get tshirtMenu() { return $("//ul//li//a[contains(@title,'T-shirts')]") }
    get searchInput() { return $("#search_query_top") }
    get searchBt() { return $("//button[contains(@name,'submit_search')]") }
    get addToCartBt() { return $("#add_to_cart") }
    get productAddedToCartMsg() { return $("//h2[text()[contains(.,'Product successfully added to your shopping cart')]]") }
    get proceedToCheckout() { return $("//a[contains(@title,'Proceed to checkout')]") }
    get termOfServiceChbx() { return $("#cgv") }
    get proceedToStandardCheckout() { return $("//a[contains(@title,'Proceed to checkout') and contains(@class,'standard-checkout')]") }
    get processAddress() { return $("//button[@name='processAddress']") }
    get processCarrier() { return $("//button[@name='processCarrier']") }

    get totalProduct() { return $("#total_product") }
    get totalShipping() { return $("#total_shipping") }
    get totalPriceWithoutTax() { return $("#total_price_without_tax") }
    get totalTax() { return $("#total_tax") }
    get totalPrice() { return $("//td[@id='total_price_container']//span") }

    async verifyMyAccTitle() {
        expect(await this.myAccountTitle).toBeDisplayed()
    }

    async verifyUserName(data) {
        expect(await $("//span[contains(text(),'" + data.hashes()[0].Fname + " " + data.hashes()[0].Lname + "')]")).toBeDisplayed()
    }

    async clicksignOut() {
        await (await this.signOut).click()
    }

    async clickTshirtMenu() {
        await (await this.tshirtMenu).click()
    }

    async searchProduct(productName) {
        await (await this.searchInput).setValue(productName);
        await (await this.searchBt).click()
    }

    async verifySearchedProduct(productName) {
        var product = "//div[contains(@class,'product-container')]//a[contains(text()," + productName + ")]"
        expect(await $(product)).toBeDisplayed()
        await (await $(product)).click()
    }

    async addToCart(productName) {
        await (await this.addToCartBt).click()
    }

    async verifyCart() {
        expect(await this.productAddedToCartMsg).toBeDisplayed()
    }

    async clickProceedToCheckout() {
        await browser.pause(4000)
        await (await this.proceedToCheckout).click()
    }

    async clickProceedToStandardCheckout() {
        await browser.pause(1000)
        await (await this.proceedToStandardCheckout).click()
    }

    async clickProcessAddress() {
        await browser.pause(1000)
        await (await this.processAddress).click()
    }

    async clickProcessCarrier() {
        await browser.pause(1000)
        await (await this.processCarrier).click()
    }

    async checkTermsOfService() {
        await (await this.termOfServiceChbx).click()
    }

    async verifyPaymentDetails(data) {
        expect(await this.totalProduct).toHaveText(data.hashes()[0].TotalProduct)
        expect(await this.totalShipping).toHaveText(data.hashes()[0].TotalShipping)
        expect(await this.totalPriceWithoutTax).toHaveText(data.hashes()[0].TotalPriceWithoutTax)
        expect(await this.totalTax).toHaveText(data.hashes()[0].Tax)
        expect(await this.totalPrice).toHaveText(data.hashes()[0].TotalPrice)
    }
}

module.exports = new MyAccount();
