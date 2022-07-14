const { webdriver } = require("selenium-webdriver");
const {Builder} = require("selenium-webdriver");

class DriverManager{
    getDriver(){
        // driver = new webdriver.Builder().forBrowser('chrome').build();
        let driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        return driver;
    }
}
// module.exports = DriverManager;
module.exports = DriverManager;