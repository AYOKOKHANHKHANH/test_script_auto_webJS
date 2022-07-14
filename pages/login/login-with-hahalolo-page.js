const {Builder, By, Key, until} = require('selenium-webdriver');
const DriverManager = require('../../driver-manager/setup-driver')

const LoginLocator = require ('../../locators/login/login-with-hahalolo-locator');
const { driver } = require('./logout-page');

class LoginPage{
    constructor(driver){
        this.driver = driver;
    }

    async load(){
        await this.driver.get('https://sb.halome.dev/');
        await this.driver.manage().setTimeouts({ implicit: 10000 });
    };

    async login(username, pwd, pin){
        await this.load();
        await this.clickLoginWithHahaButton();
        await this.driver.sleep(500)
        await this.enterUsername(username);
        await this.enterPass(pwd);
        try{
            await this.clickLoginButton()
            await this.clickContinueButton();
            try{
                await this.enterPinCode(pin);
                await this.clickAcceptButton();
            }
            catch(e){
            }
        }
        catch(e){
        }
    }

   
    async clickLoginWithHahaButton(){
        const login_wt_haha = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getLoginWithHahaButtonId())),3000);
        await login_wt_haha.click();
    };
    
    async enterUsername(username){
        await this.driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        await Promise.any([this.driver.wait(until.elementLocated({ id: LoginLocator.getUsernameId()}))])
        .then((el) => {
            el.sendKeys(username) 
        }
        ).catch((err) => {
            console.log(err)
        })
    };

    async enterPass(pass){
        await this.driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        await Promise.any([this.driver.wait(until.elementLocated({ id: LoginLocator.getPassId() }))])
        .then((el) => {
            el.sendKeys(pass) 
        }
        ).catch((err) => {
            console.log(err)
        })
    }

    async clickContinueButton (){
        const continue_button = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getContinueButtonId())),10000);
        await continue_button.click();
    }

    async enterPinCode(pincode){
        const pin = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getPinXpath())),3000);
        await pin.sendKeys(pincode);
    }

    async clickAcceptButton(){
        const accept_button = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getAcceptButtonId())),3000);
        await accept_button.click();
    }

    async clickLoginButton(){
        const login_button = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getLoginButtonXpath())),10000);
        await login_button.click();
    }

    async getTextNotiWhenLoginFail(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenLoginFailXpath())),3000).getText()
        return get_text
        // console.log(get_text);
    }

    async getTextNotiWhenNotEnterUsername(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenNotEnterUsernameXpath())),3000).getText()
        return get_text
    }

    async getTextNotiWhenNotEnterPassword(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenNotEnterPasswordXpath())),3000).getText()
        return get_text
    }

    async getUrlCurrent(){
        await this.driver.wait(until.urlIs('https://sb.halome.dev/'))
        const currentURL = await this.driver.getCurrentUrl();
        return currentURL;
    }

}

module.exports = LoginPage;