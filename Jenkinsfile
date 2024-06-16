pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build') {
              steps {
                echo 'Building..'
                docker.build image: "${DOCKER_IMAGE}:${DOCKER_TAG}"
                docker.push image: "${DOCKER_IMAGE}:${DOCKER_TAG}"
              }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}