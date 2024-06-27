pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build and push docker image') {
            steps {
            // build docker image
                script {
//                     sh "docker image build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }
}