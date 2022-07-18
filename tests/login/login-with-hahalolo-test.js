const LoginPage = require('../../pages/login/login-with-hahalolo-page');
const LogoutPage = require('../../pages/login/logout-page');
const assert = require ('assert')
const DriverManager = require('../../driver-manager/setup-driver');
const { until } = require('selenium-webdriver');


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
    let url = "https://sb.halome.dev/"
    

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

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterUsername(), notiWhenNotEnterUsername)
        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterPassword(), notiWhenNotEnterPassword)
    });


    it('Login not user name', async function(){
        let username = "";
        await loginPage.login(username, pass);

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterUsername(), notiWhenNotEnterUsername)
    })


    it('Login not password', async function(){
        let pass = "";
        await loginPage.login(username,pass);

        assert.strictEqual(await loginPage.getTextNotiWhenNotEnterPassword(), notiWhenNotEnterPassword)
    })


    it('Login username True, password False', async function(){
        let pass = "hhhh";
        await loginPage.login(username,pass);
        let noti
        if (await driver.getCurrentUrl() != url){
            noti = await loginPage.getTextNotiWhenLoginFail()
        }
      
        assert.strictEqual(noti, notiWhenUsernameOrPasswordFalse)
    })


    it('Login username False, password True',async function(){
       let username = "jjjjj";
       await loginPage.login(username, pass);
       let noti
       if (await driver.getCurrentUrl != url){
            noti = await loginPage.getTextNotiWhenLoginFail()
       }

       assert.strictEqual(noti , notiWhenUsernameOrPasswordFalse)
    })


    it('Login not Pin', async function(){
        let pin = "";
        await loginPage.login(username, pass);
        await loginPage.loginSuccess(pin)
        assert.notDeepStrictEqual(await driver.getCurrentUrl(), url)
    })


    it('Login Pin false',async function(){
        let pin = "111111";
        await loginPage.login(username, pass);
        await loginPage.loginSuccess(pin)

        assert.notDeepStrictEqual(await driver.getCurrentUrl(), url)
    } )

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
        await loginPage.clickNotMeButton()

        let title = await driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        assert.strictEqual(title, true)
    })
})
