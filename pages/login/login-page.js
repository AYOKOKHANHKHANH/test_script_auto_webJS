const {Builder, By, Key, until} = require('selenium-webdriver');
let SetUpDriver = require('../../driver-manager/setup-driver');
let webdriver = require('selenium-webdriver');
const LoginLocator = require ('../../locators/login/login-locator');
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
        await this.click_login_with_haha_button();
        await this.driver.sleep(500)
        await this.enter_username(username);
        await this.enter_pass(pwd);
        try{
            await this.click_login_button()
            await this.click_continue_button();
            try{
                await this.enter_pin_code(pin);
                await this.click_accept_button();
            }
            catch(e){
            }
        }
        catch(e){
        }
    }

   
    async click_login_with_haha_button(){
        const login_wt_haha = await this.driver.wait(until.elementLocated(By.id(LoginLocator.get_login_with_haha_button_id())),3000);
        await login_wt_haha.click();
        console.log("Click button login with halo");
       
    };
    
    async enter_username(username){
        await this.driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        await Promise.any([this.driver.wait(until.elementLocated({ id: LoginLocator.get_username_id() }))])
        .then((el) => {
            el.sendKeys(username) 
        }
        ).catch((err) => {
            console.log(err)
        })
    };

    async enter_pass(pass){
        await this.driver.wait(until.titleIs('Đăng nhập | Hahalolo'))
        await Promise.any([this.driver.wait(until.elementLocated({ id: LoginLocator.get_pass_id() }))])
        .then((el) => {
            el.sendKeys(pass) 
        }
        ).catch((err) => {
            console.log(err)
        })
    }

    async click_continue_button (){
        console.log('click continue button');
        const continue_button = await this.driver.wait(until.elementLocated(By.id(LoginLocator.get_continue_button_id())),10000);
        await continue_button.click();
    }

    async enter_pin_code(pincode){
        console.log('Enter pin code');
        const pin = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.get_pin_xpath())),3000);
        await pin.sendKeys(pincode);
    }

    async click_accept_button(){
        console.log('Click accept button');
        const accept_button = await this.driver.wait(until.elementLocated(By.id(LoginLocator.get_accept_button_id())),3000);
        await accept_button.click();
    }

    async click_login_button(){
        const login_button = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.get_login_button_xpath())),10000);
        await login_button.click();
    }

    async get_text_noti_when_login_fail(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.get_noti_when_login_fail_xpath())),3000).getText()
        return get_text
        // console.log(get_text);
    }

    async get_text_noti_when_not_enter_username(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.get_noti_when_not_enter_username_xpath())),3000).getText()
        return get_text
    }

    async get_text_noti_when_not_enter_password(){
        const get_text = await this.driver.wait(until.elementLocated(By.xpath(LoginLocator.get_noti_when_not_enter_password_xpath())),3000).getText()
        return get_text
    }

    async get_current_url(){
        await this.driver.wait(until.urlIs('https://sb.halome.dev/'))
        const currentURL = await this.driver.getCurrentUrl();
        return currentURL;
    }

}

module.exports = LoginPage;