pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Clean before build
                cleanWs()

                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}