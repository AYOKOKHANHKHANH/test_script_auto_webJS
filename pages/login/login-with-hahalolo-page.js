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
        await this.clickLoginWithHahaButton();
    };

    async login(username, pwd){
        await this.driver.sleep(1000)
        await this.enterUsername(username);
        await this.enterPass(pwd);
        await this.clickLoginButton()
        try{
            await this.clickContinueButton()
        }
        catch(e){
        }

    }


    async loginSuccess(pin){
        await this.clickContinueButton()
        try{
            await this.enterPinCode(pin);
            await this.clickAcceptButton();
        }
        catch(e){
        }
    }

   
    async clickLoginWithHahaButton(){
        const loginWithtHaha = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getLoginWithHahaButtonId())),3000);
        await loginWithtHaha.click();
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
        const continueButton = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getContinueButtonId())),10000);
        await continueButton.click();
    }


    async enterPinCode(pincode){
        const pin = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getPinXpath())),3000);
        await pin.sendKeys(pincode);
    }


    async clickAcceptButton(){
        const acceptButton = await this.driver.wait(until.elementLocated(By.id(LoginLocator.getAcceptButtonId())),3000);
        await acceptButton.click();
    }


    async clickLoginButton(){
        const loginButton = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getLoginButtonXpath())),10000);
        await loginButton.click()
    }


    async getTextNotiWhenLoginFail(){
        const getText = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenLoginFailXpath())),3000).getText()
        return getText
    }


    async getTextNotiWhenNotEnterUsername(){
        const getText = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenNotEnterUsernameXpath())),3000).getText()
        return getText
    }


    async getTextNotiWhenNotEnterPassword(){
        const getText = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotiWhenNotEnterPasswordXpath())),3000).getText()
        return getText
    }


    async getUrlCurrent(){
        await this.driver.wait(until.urlIs('https://sb.halome.dev/'))
        const currentURL = await this.driver.getCurrentUrl();
        return currentURL
    }


    async clickNotMeButton(){
        const notMe = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getNotMeButtonXpath())),3000);
        return notMe.click()
    }


    async clickBackButton(){
        const back = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getBackButtonXpath())),3000);
        return back.click()
    }

    async getTitleEnterPin(){
        const title = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.getTitleEnterPinXpath())),3000).getText()
        return title
    }
}

module.exports = LoginPage;