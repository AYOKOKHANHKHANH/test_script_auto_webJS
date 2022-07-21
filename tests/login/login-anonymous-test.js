const LoginAnonymousPage = require("../../pages/login/login-anonymous-pages")
const DriverManager = require('../../driver-manager/setup-driver')
const LogoutPage = require('../../pages/login/logout-page')
const assert = require("assert");
const {until} = require("selenium-webdriver");
const {DataLogin} = require('../../utils/data')


describe('Login anonymously', async function(){
    this.timeout(300000)
    let driver
    let driverManager
    let loginAnonymous
    let logout
    let phone                       = DataLogin.phoneNumber;
    let otp                         = DataLogin.otp;
    let name                        = DataLogin.name;
    let url                         = DataLogin.url;
    
    
    beforeEach(async function(){
        driverManager = new DriverManager();
        driver = driverManager.getDriver();
        loginAnonymous = new LoginAnonymousPage(driver);
        logout = new LogoutPage(driver)
        await loginAnonymous.load();
    });


    afterEach(async function(){
        await driver.quit()
    });


    it('login success(The first time )', async function(){
        await loginAnonymous.login(phone,otp)
        await loginAnonymous.theFirstLogin(name)
        await driver.wait(until.urlIs(url))

        assert.strictEqual(await driver.getCurrentUrl(), url)
        await logout.logout()
    })


    it('Login Successfully(the next time)', async function(){
        await loginAnonymous.login(phone,otp)
        await driver.wait(until.urlIs(url))

        assert.strictEqual(await driver.getCurrentUrl(), url)
        await logout.logout()
    })


    it('Login not phone number', async function(){
        let phone      = ""
        await loginAnonymous.login(phone, otp)

        assert.strictEqual(await loginAnonymous.clickStart(),undefined )
    })


    it('Login not otp', async function(){
        let otp       = ""
        await loginAnonymous.login(phone, otp)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })


    it('Login with phone <= 5', async function(){
        let phone     = "09876"
        await loginAnonymous.login(phone, otp)

        assert.strictEqual(await loginAnonymous.clickStart(),undefined )
    })


    it('Login with otp false', async function(){
        let otp      = "111111"
        await loginAnonymous.login(phone, otp)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })
})