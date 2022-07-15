const {Builder, By, Key, until} = require("selenium-webdriver");
let SetUpDriver = require ("../../driver-manager/setup-driver");
let LogoutLocator = require ("../../locators/login/logout-locator");

class LogoutPage{
    constructor(driver){
        this.driver = driver;
    }

    async logout(){
        try{
            await this.clickAvatarButton();
        }
        catch(e){
            await this.clickAvatarNotImgButton();
        }
        await this.clickLogOutButton();
        await this.clickOkButton();
    }
   
    async clickAvatarButton(){
        const avatarButton = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getAvatarButtonXpath())),3000);
        await avatarButton.click();
    }

    async clickAvatarNotImgButton(){
        const avatarNotImg = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getAvatarNotImgXpath())),3000);
        await avatarNotImg.click();
    }

    async clickLogOutButton(){
        const logOut = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getLogoutButtonXpath())),3000);
        await logOut.click();
    }

    async clickOkButton(){
        const okButton = await this.driver.wait(until.elementLocated(By.id(LogoutLocator.getOkButtonId())),3000);
        await okButton.click();
    }
}

module.exports = LogoutPage;