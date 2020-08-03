FROM node:12

USER root

# Install nodejs
#RUN apk add --update nodejs-current npm

# install packages
RUN apt-get update && \
    apt-get install -y curl \
    wget \
    openjdk-8-jdk

ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java

# Install Appium
RUN npm install appium@1.17.1 -g --chromedriver-skip-install
RUN npm install -g allure-commandline

#USER node
WORKDIR /src