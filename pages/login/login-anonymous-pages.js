const {By, until} = require('selenium-webdriver');
const DriverManager = require('../../driver-manager/setup-driver')
const LoginAnonymousLocator = require ('../../locators/login/login-anonymous-locator');


class LoginAnonymousPage{
    constructor(driver){
        this.driver = driver;
    }

   
    async load(){
        await this.driver.get('https://sb.halome.dev/');
        await this.driver.manage().setTimeouts({ implicit: 10000 });
        await this.clickLoginAnony()
    };


    async login(phone, otp){
        await this.enterPhoneNumber(phone)
        try{
            await this.clickStart()
            await this.enterOtpCode(otp)
            await this.clickResendOtpViaSms()
            await this.reEnterOtpCode(otp)
        }
        catch (e){
        }
    }

    async theFirstLogin(name){
        try{
            await this.enterUsername(name)
            await this.clickContinueButton()
        }
        catch (e) {
            await this.clickContinueButton()
        }
    }



    async clickLoginAnony(){
        const loginAnony = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getLoginAnonyButtonId())),3000)
        await loginAnony.click()
    }

    async enterPhoneNumber(phone){
        const phonenumber = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getPhoneNumberId())),3000)
        await phonenumber.sendKeys(phone)
    }

    async clickStart(){
        const start = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getStartButtonId())),3000)
        await start.click()
    }

    async clickResendOtpViaSms(){
        const resendOtpViaSms = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getResendOtpCodeViaSmsId())),3000)
        await resendOtpViaSms.click()
    }

    async enterOtpCode(otp){
        const otpCode = await this.driver.wait(until.elementLocated(By.xpath(LoginAnonymousLocator.getOtpXpath())),3000)
        await otpCode.sendKeys(otp)
    }

    async enterUsername(name){
        const username = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getUsernameId())),3000)
        await username.sendKeys(name)
    }

    async clickContinueButton(){
        const continueButton = await this.driver.wait(until.elementLocated(By.id(LoginAnonymousLocator.getStartButtonId())),3000)
        await continueButton.click()
    }

    async reEnterOtpCode(otp){
        const otpSecond = await this.driver.wait(until.elementLocated(By.xpath(LoginAnonymousLocator.getOtpSecondXpath())),3000)
        await otpSecond.sendKeys(otp)
    }


}

module.exports = LoginAnonymousPage;