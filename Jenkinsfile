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
                           results: [[path: '/report/allure-results/']]
                         ])
                    }
                }
            }
        }
    }
