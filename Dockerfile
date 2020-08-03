FROM node:12

USER root

# install packages
RUN apt-get update && \
    apt-get install -y curl \
    wget \
    openjdk-8-jdk
#Config JAVA_HOME
RUN export JAVA_HOME="$(dirname $(dirname $(readlink -f $(which java))))"

# Install Appium
RUN npm install appium@1.17.1 -g --chromedriver-skip-install
RUN npm install -g allure-commandline

#USER node
WORKDIR /src