const LoginPage = require('../../pages/login/login-with-hahalolo-page');
const LogoutPage = require('../../pages/login/logout-page');
const assert = require ('assert')
const DriverManager = require('../../driver-manager/setup-driver');
const { until } = require('selenium-webdriver');
const {DataLogin} = require('../../utils/data')


describe('Login with hahalolo',function(){
    this.timeout(300000);
   
    let driver;
    let loginPage;
    let logoutPage;
    let username = DataLogin.username;
    let pass = DataLogin.password;
    let pin = DataLogin.pin
    let url = DataLogin.url
    

    beforeEach(async function(){
        let driverManager = new DriverManager();
        driver = driverManager.getDriver();
        loginPage = new LoginPage(driver);
        logoutPage = new LogoutPage(driver);
        await loginPage.load();
    });


    afterEach(async function(){
        await driver.quit()
    });


    it('Login when account never logged in(success)', async function(){
       await loginPage.login(username,pass);
       await loginPage.loginSuccess(pin);

       assert.strictEqual(await loginPage.getUrlCurrent(),url)
       await logoutPage.logout();
    })

    it('Re-login the account that was previously logged in', async function(){
        await loginPage.login(username, pass)
        await loginPage.loginSuccess(pin)
        await logoutPage.logout()
        await loginPage.clickLoginWithHahaButton()
        await loginPage.loginSuccess(pin)


        assert.strictEqual(await loginPage.getUrlCurrent(),url)
        await logoutPage.logout();
    })

    it('Login not username & password',async function(){
        let username = "";
        let pass = "";
        await loginPage.login(username,pass);

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    });

    it('Login not user name', async function(){
        let username = "";
        await loginPage.login(username, pass);

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login not password', async function(){
        let pass = "";
        await loginPage.login(username,pass);

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login username True, password False', async function(){
        let pass = "hhhh";
        await loginPage.login(username,pass);

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login username False, password True',async function(){
       let username = "jjjjj";
       await loginPage.login(username, pass);

       assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login not Pin', async function(){
        let pin = "";
        await loginPage.login(username, pass);
        await loginPage.loginSuccess(pin)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login Pin false',async function(){
        let pin = "111111";
        await loginPage.login(username, pass);
        await loginPage.loginSuccess(pin)

        assert.notStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Test Continue Button', async function(){
        await loginPage.login(username, pass)
        await loginPage.clickContinueButton()

        let title = await loginPage.getTitleEnterPin()
        assert.strictEqual(title, 'Nhập mã Pin')
    })

    it('Test Back Button', async function(){
        await loginPage.login(username, pass)
        await loginPage.clickContinueButton()
        await loginPage.clickBackButton()

        await driver.wait(until.urlIs(url + 'welcome'))
        assert.strictEqual(await driver.getCurrentUrl(), url + 'welcome')
    })

    it('Test Not Me Button', async function(){
        await loginPage.login(username, pass)
        await loginPage.clickNotYouButton()

        let title = await driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        assert.strictEqual(title, true)
    })
})