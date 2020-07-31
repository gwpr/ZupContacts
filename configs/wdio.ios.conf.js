const { config } = require('./wdio.shared.conf');
const path = require('path');

config.specs =
    [
       './test/**/*.js'
    ];
config.exclude = 
[],
config.suites =
    {
        contacts: [
            './test/contacts/*.js'
        ]
    },
config.reporters= ['spec',
    ['allure', {
            outputDir: 'report/allure-results/iOS',
            disableWebdriverScreenshotsReporting: false,
            disableWebdriverStepsReporting: true
        },
    ],
],  
config.capabilities = 
    [{
        maxInstances: 1,
        "appium:automationName": "XCUITest",
        "appium:deviceName": "iPhone 11",
        "platformName": "iOS",
        "appium:platformVersion": "13.6",
        "appium:app": path.join(__dirname, "../artefact/ContactsSimulator.app"),
        // "appium:bundleId": "com.jayway.contacts",
        "appium:newCommandTimeout": 120000
        }];

exports.config = config;