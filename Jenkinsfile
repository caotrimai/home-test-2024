pipeline {
    agent { docker: true }

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        stage('Push') {
            steps {
                script {
                    withDockerRegistry('https://registry.hub.docker.com', 'dockerhub-secret-text') {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Delete Local Image') {
            steps {
                sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }
}