// tempo de espera nos comandos do wdio (waitForExist, waitForDisplayed ...)
const timeoutList = {
    timeoutWait: 100000
}

// tempo de espera
const timeWait = {
    implicitWait: 110000
}

// timeouts do wdio.conf.js
const timeoutConfig = {
    timeout: 240000
}

module.exports = {timeoutList, timeWait, timeoutConfig}