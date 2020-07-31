pipeline {
  agent {
    docker  {
      dokerfile true
    }
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
}
}