pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build Image') {
            steps {
            // build docker image
                script {
                    sh "docker image build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }
    }
}