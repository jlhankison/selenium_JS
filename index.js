const {Builder, By, Key, util} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.downloader.dir", "*\mySeleniumDownloads");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk","applications/x-csv");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://facebook.com");

// async function example (){
//    let driver = await new Builder().forBrowser("firefox").build();
//    await driver.get("http://google.com");
//    await driver.findElement(By.name("q")).sendKeys("sailboats", Key.RETURN);
//    await driver.sleep(10000);
//    await driver.close();
// }

// example();