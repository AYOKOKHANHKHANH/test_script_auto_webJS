const {Builder, By, Key, until} = require("selenium-webdriver");
let SetUpDriver = require ("../../driver-manager/setup-driver");
let LogoutLocator = require ("../../locators/login/logout-locator");

class LogoutPage{
    constructor(driver){
        this.driver = driver;
    }

    async logout(){
        try{
            await this.click_avatar_button();
        }
        catch(e){
            await this.click_avatar_not_img_button();
        }
        await this.click_log_out_button();
        await this.click_ok_button();
    }
   
    async click_avatar_button(){
        const avatar_button = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.get_avatar_button_xpath())),3000);
        await avatar_button.click();
    }

    async click_avatar_not_img_button(){
        const avatar_not_img = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.get_avatar_not_img_xpath())),3000);
        await avatar_not_img.click();
    }

    async click_log_out_button(){
        const log_out = await this.driver.wait(until.elementLocated(By.xpath(LogoutLocator.get_logout_button_xpath())),3000);
        await log_out.click();
    }

    async click_ok_button(){
        const ok_button = await this.driver.wait(until.elementLocated(By.id(LogoutLocator.get_ok_button_id())),3000);
        await ok_button.click();
    }
}

module.exports = LogoutPage;