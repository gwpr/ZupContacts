const { join } = require("path");
const time = require("../data/time-config");
require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
  })

exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    
    specs: [
        './test/**/*.js'    
    ],
    exclude:
    [],
    suites:{},
    // ============
    // Capabilities
    // ============
  
    maxInstances: 5,
    capabilities: [{
        automationName: "UiAutomator2",
        device: "Samsung Galaxy A8", 
        platformName: "Android",
        os_version: "7.1", 
        app: process.env.BROWSERSTACK_CUSTOM_ID_ANDROID,
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        unicodeKeyboard: true,
        resetKeyboard: true,
        noReset: false,
        newCommandTimeout: time.timeoutConfig.timeout,
        build: process.env.BUILD_ANDROID,
        'browserstackLocal': true,
        'browserstack.appium_version': '1.16.0'
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: time.timeWait.implicitWait,
    connectionRetryCount: 3,
    services: ['browserstack'] ,   
    appium: {
        command: 'appium',
    },
    framework: 'mocha',
    reporters: [
          ['allure', {
            outputDir: './report/allure-results/android',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            }],
            'spec',
        ],
    mochaOpts: {
        ui: 'bdd',
        timeout: time.timeoutConfig.timeout,
        require: ['@babel/register']
    },
    afterTest: function(test) {
        if (test.error !== undefined ) {
            browser.takeScreenshot();
        }
    }
}

