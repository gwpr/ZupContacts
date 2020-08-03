const { config } = require('./wdio.shared.conf');
const path = require('path');
config.specs = 
[
     './test/**/*',
    // './test/contacts/listContactByNameTest.js',
    // './test/contacts/profileContactNameTest.js',
    // './test/contacts/backProfileToBeginTest.js',
],
config.suites =
{
    contacts: [
        './test/contacts/*.js'
    ]
},

config.exclude = 
[],
config.reporters= ['spec',
    ['allure', {
            outputDir: 'report/allure-results/android',
            disableWebdriverScreenshotsReporting: false,
            disableWebdriverStepsReporting: true
        },
    ],
],  
config.capabilities = 
    [{
        maxInstances: 1,
        automationName: "UiAutomator2",
        deviceName: "emulator-5554",
        platformName: "Android",
        // platformVersion: "10.0",
        app: path.join(__dirname, "../artefact/Contacts.apk"),
        appPackage: "com.jayway.contacts",
        appActivity: "com.jayway.contacts.MainActivity",
        autoAcceptAlerts:true,
        autoGrantPermissions:true,
        unicodeKeyboard: true,
        resetKeyboard: true,
        noReset: false,
        newCommandTimeout: 60000,
    }];

exports.config = config;


