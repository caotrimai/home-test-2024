pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
        registryCredential = 'dockerhub-secret-text'
    }

    stages {

        stage('Push') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    }
                }
            }
        }
    }
}