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
      stage("Report") {
        steps {
             sh "- allure generate report/allure-results/android -o report/allure-report/android"
             sh "- allure generate report/allure-results/iOS -o report/allure-report/iOS"
        }
      }
      post {
        always {
          script {
            allure([
              includeProperties: false,
              jdk: '',
              properties: [],
              reportBuildPolicy: 'ALWAYS',
              results: [[path: 'target/allure-results']]
            ])
          }
        }
      }
    }
}
}