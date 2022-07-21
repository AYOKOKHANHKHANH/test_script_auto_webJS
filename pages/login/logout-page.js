const {Builder, By, Key, until} = require("selenium-webdriver");
let SetUpDriver = require ("../../driver-manager/setup-driver");
let LogoutLocator = require ("../../locators/login/logout-locator");
const LoginLocator = require("../../locators/login/login-with-hahalolo-locator");

class LogoutPage{
    constructor(driver){
        this.driver = driver;
    }

    async logout(){
        await this.clickAvatarButton();
        await this.clickLogoutButton();
        await this.clickOkButton();
    }
   
    async clickAvatarButton(){
        const avatarButton = await this.driver.wait(until.elementLocated(By.id(LogoutLocator.getAvatarButtonId())),3000);
        await avatarButton.click();
    }

    async clickLogoutButton(){
        const logout = await this.driver.wait(until.elementLocated(By.css( LogoutLocator.getLogoutButtonCss())),3000)
        await logout.click();
    }

    async clickOkButton(){
        const okButton = await this.driver.wait(until.elementLocated(By.id(LogoutLocator.getOkButtonId())),3000);
        await okButton.click();
    }
}

module.exports = LogoutPage;