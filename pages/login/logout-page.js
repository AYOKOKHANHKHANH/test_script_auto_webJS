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
        const avatar_button = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getAvatarButtonXpath())),3000);
        await avatar_button.click();
    }

    async clickAvatarNotImgButton(){
        const avatar_not_img = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getAvatarNotImgXpath())),3000);
        await avatar_not_img.click();
    }

    async clickLogOutButton(){
        const log_out = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.getLogoutButtonXpath())),3000);
        await log_out.click();
    }

    async clickOkButton(){
        const ok_button = await this.driver.wait(until.elementLocated(By.id(LogoutLocator.getOkButtonId())),3000);
        await ok_button.click();
    }
}

module.exports = LogoutPage;