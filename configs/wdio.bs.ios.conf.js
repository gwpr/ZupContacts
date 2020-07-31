require('dotenv').config()

exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
    
    specs: [
        './test/**/**.js',
        './test/**/**/**.js'
    ],
    exclude: [],
    suites:{
        contacts: [
            './test/**/**.js',
            './test/**/**/**.js'
        ]
    },
    // ============
    // Capabilities
    // ============
  
    maxInstances: 1,
    capabilities: [{
        automationName: "XCUITest",
        deviceName: "iPhone 11 Pro",
        platformName: "iOS",
        os_version: "13",
        app: process.env.BROWSERSTACK_CUSTOM_ID_IOS,
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        noReset: false,
        newCommandTimeout: 180000,
        build: process.env.BUILD_IOS,
        'browserstackLocal': true,
        'browserstack.appium_version': '1.17.0'
    }],
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 180000,
    connectionRetryCount: 3,
    services: ['browserstack'] ,   
    appium: {
        command: 'appium',
    },
    framework: 'mocha',
    reporters: [
          ['allure', {
            outputDir: 'report/allure-results/iOS',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            }],
            'spec',
        ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 240000,
        require: ['@babel/register']
    },
    afterTest: function(test) {
        if (test.error !== undefined ) {
            browser.takeScreenshot();
        }
    }
}

