const until = require('selenium-webdriver')
const Driver = require('selenium-webdriver/chrome');
const LoginPage = require('../../pages/login/login-page');
const webdriver = require('selenium-webdriver');
const LogoutPage = require('../../pages/login/logout-page');
const DriverManager = require ('../../driver-manager/setup-driver');
const assert = require ('assert')


describe('Login',function(){
    this.timeout(300000);
    // let driver;
    // let loginPage
   
    let driver;
    let loginPage;
    let logoutPage;
    let username = "ayokohankhanh@gmail.com";
    let pass = "fHLDRm4R#";
    let pin = "123456"
    let noti_when_username_or_password_false = "Tên tài khoản hoặc mật khẩu không chính xác"
    let noti_when_not_enter_username = "Tên tài khoản là bắt buộc"
    let noti_when_not_enter_password = "Mật khẩu là bắt buộc"
    url = "https://sb.halome.dev/"
    
    beforeEach(async function(){
        // await LoginPage.load();
        let drivermanager = new DriverManager();
        driver = drivermanager.getDriver();
        loginPage = new LoginPage(driver);
        logoutPage = new LogoutPage(driver);
        // loginPage = new LoginPage(driver);
        await loginPage.load();
    });

    afterEach(async function(){
        //Enter actions to be performed after test
        await driver.quit();
    });

    it('Login success', async function(){
       await loginPage.login(username,pass,pin);
    
       assert.strictEqual(await loginPage.get_current_url(),url)
       await logoutPage.logout();
    })


    it('Login not username & password',async function(){
        let username = "";
        let pass = "";
        await loginPage.login(username,pass,pin);

        assert.strictEqual(await loginPage.get_text_noti_when_not_enter_username(), noti_when_not_enter_username)
        assert.strictEqual(await loginPage.get_text_noti_when_not_enter_password(), noti_when_not_enter_password)
    });

    it('Login not user name', async function(){
        let username = "";
        await loginPage.login(username, pass, pin);

        assert.strictEqual(await loginPage.get_text_noti_when_not_enter_username(), noti_when_not_enter_username)
    })

    it('Login not password', async function(){
        let pass = "";
        await loginPage.login(username,pass,pin);

        assert.strictEqual(await loginPage.get_text_noti_when_not_enter_password(), noti_when_not_enter_password)
    })

    it('Login username True, password False', async function(){
        let pass = "hhhh";
        await loginPage.login(username,pass,pin);
        
        assert.strictEqual(await loginPage.get_text_noti_when_login_fail(), noti_when_username_or_password_false)
    })

    it('Login username False, password True',async function(){
       let username = "jjjjj";
       await loginPage.login(username, pass, pin);
       assert.strictEqual(await loginPage.get_text_noti_when_login_fail(), noti_when_username_or_password_false)
    })

    it('Login not Pin', async function(){
        let pin = "";
        await loginPage.login(username, pass, pin);

        assert.notDeepStrictEqual(await driver.getCurrentUrl(), url)
    })

    it('Login Pin false',async function(){
        let pin = "111111";
        await loginPage.login(username, pass, pin);

        assert.notDeepStrictEqual(await driver.getCurrentUrl(), url)
    } )
})

