const until = require('selenium-webdriver')
const Driver = require('selenium-webdriver/chrome');
const LoginPage = require('../../pages/login/login-page');
const LogoutPage = require('../../pages/login/logout-page');
const assert = require ('assert')
const DriverManager = require('../../driver-manager/setup-driver')


describe('Login',function(){
    this.timeout(300000);
   
    let driver;
    let loginPage;
    let logoutPage;
    let username = "0904613192";
    let pass = "blackpinkinyourarea";
    let pin = "123456"
    let notiWhenUsernameOrPasswordFalse = "Tên tài khoản hoặc mật khẩu không chính xác"
    let notiWhenNotEnterUsername = "Tên tài khoản là bắt buộc"
    let notiWhenNotEnterPassword = "Mật khẩu là bắt buộc"
    url = "https://sb.halome.dev/"
    

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


    it('Login success', async function(){
       await loginPage.login(username,pass,pin);
    
       assert.strictEqual(await loginPage.getUrlCurrent(),url)
       await logoutPage.logout();
    })


    it('Login not username & password',async function(){
        let username = "";
        let pass = "";
        await loginPage.login(username,pass,pin);

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterUsername(), notiWhenNotEnterUsername)
        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterPassword(), notiWhenNotEnterPassword)
    });


    it('Login not user name', async function(){
        let username = "";
        await loginPage.login(username, pass, pin);

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterUsername(), notiWhenNotEnterUsername)
    })


    it('Login not password', async function(){
        let pass = "";
        await loginPage.login(username,pass,pin);

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterPassword(), notiWhenNotEnterPassword)
    })


    it('Login username True, password False', async function(){
        let pass = "hhhh";
        await loginPage.login(username,pass,pin);
        
        assert.strictEqual(await loginPage.getTextNotiWhenLoginFail(), notiWhenUsernameOrPasswordFalse)
    })


    it('Login username False, password True',async function(){
       let username = "jjjjj";
       await loginPage.login(username, pass, pin);
       
       assert.strictEqual(await loginPage.getTextNotiWhenLoginFail(), notiWhenUsernameOrPasswordFalse)
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

