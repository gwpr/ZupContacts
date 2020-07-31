exports.config = {
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',
    port: 4723,

    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './test/**/*.js'
    ],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    appium: {
        command: 'appium'
    },
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 120000
    }, 
    afterTest: function(test) {
        if (test.error !== undefined ) {
            browser.takeScreenshot();
        }
    }
}
