FROM node:12

USER root

# Install nodejs
RUN apk add --update nodejs-current npm

# Install Appium
RUN npm install appium@1.17.1 -g --chromedriver-skip-install
RUN npm -g allure-commandline

#USER node
WORKDIR /src