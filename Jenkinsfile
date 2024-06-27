pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build Image') {
            steps {
            // build docker image
                script {
                    docker.build "${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }
}