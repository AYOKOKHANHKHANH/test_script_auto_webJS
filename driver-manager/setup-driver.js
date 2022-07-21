const { webdriver } = require("selenium-webdriver");
const {Builder} = require("selenium-webdriver");

class DriverManager{
    getDriver(){
       
        let driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        return driver;
    }
}

module.exports = DriverManager;
