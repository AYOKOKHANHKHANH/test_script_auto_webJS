const LoginAnonymousPage = require("../../pages/login/login-anonymous-pages")
const DriverManager = require('../../driver-manager/setup-driver')
const LogoutPage = require('../../pages/login/logout-page')
const assert = require("assert");
const {until} = require("selenium-webdriver");
const {elementIsDisabled} = require("selenium-webdriver/lib/until");

describe('Login anonymously', async function(){
    this.timeout(300000)
    let driver
    let loginAnonymous
    let logout
    let phone                       = '786915989'
    let otp                         = '000000'
    let name                        = 'Ngựa'
    let url                         = 'https://sb.halome.dev/'
    
    
    beforeEach(async function(){
        let driverManager = new DriverManager();
        driver = driverManager.getDriver();
        loginAnonymous = new LoginAnonymousPage(driver);
        logout = new LogoutPage(driver)
        await loginAnonymous.load();
    });


    afterEach(async function(){
        await driver.quit()
    });


    it('Login not name', async function(){
        let phone      = "796915980"
        let name       = ""
        await loginAnonymous.login(phone,otp,name)
        await driver.wait(until.urlIs(url))

        assert.strictEqual(await driver.getCurrentUrl(), url)
        await logout.logout()
    })


    it('Login Successfully', async function(){
        await loginAnonymous.login(phone,otp,name)
        await driver.wait(until.urlIs(url))

        assert.strictEqual(await driver.getCurrentUrl(), url)
        await logout.logout()
    })


    it('Login not phone number', async function(){
        let phone      = ""
        await loginAnonymous.login(phone, otp, name)

        assert.strictEqual(await loginAnonymous.clickStart(),undefined )
    })


    it('Login not otp', async function(){
        let otp       = ""
        await loginAnonymous.login(phone, otp, name)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })


    it('Login with phone <= 5', async function(){
        let phone     = "09876"
        await loginAnonymous.login(phone, otp, name)

        assert.strictEqual(await loginAnonymous.clickStart(),undefined )
    })


    it('Login with otp false', async function(){
        let otp      = "111111"
        await loginAnonymous.login(phone, otp, name)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

})