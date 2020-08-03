    pipeline {
        agent {
          dockerfile true
        }
        stages {
            stage("Build") {
              steps {
                 sh "npm install"
              }
            }
            stage("Test") {
              steps {
               sh "npm run browserstack_android"
              }
            }
            stage("Report") {
                steps {
                    script {
                         allure([
                           includeProperties: false,
                           jdk: '',
                           properties: [],
                           reportBuildPolicy: 'ALWAYS',
                           results: [[path: './report/allure-results/android'],
                                    [path: './report/allure-results/iOS']]
                         ])
                    }
                }
            }
        }
    }