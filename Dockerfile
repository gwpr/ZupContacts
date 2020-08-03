FROM node:12

USER root

RUN export JAVA_HOME="$(dirname $(dirname $(readlink -f $(which java))))"

# Install nodejs
#RUN apk add --update nodejs-current npm

# Install Appium
RUN npm install appium@1.17.1 -g --chromedriver-skip-install
RUN npm install -g allure-commandline

#USER node
WORKDIR /src