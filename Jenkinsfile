pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
    }

    stages {
//         stage('Build') {
//             steps {
//                 script {
//                     dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
//                 }
//             }
//         }
        stage('Push') {
            withCredentials([string(credentialsId: 'dockerhub-secret-text', variable: 'DOCKERHUB_SECRET')]) {
                steps {
                    script {
//                         docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-secret-text') {
//                             dockerImage.push()
//                         }
                        withDockerRegistry([url: 'https://registry.hub.docker.com', credentialsId: 'dockerhub-secret-text']) {
                            dockerImage.push()
                        }
                    }
                }
            }
//             steps {
//                 script {
//                     withDockerRegistry([url: 'https://registry.hub.docker.com', credentialsId: 'dockerhub-secret-text']) {
//                         dockerImage.push()
//                     }
//                 }
//             }
        }
//         stage('Delete Local Image') {
//             steps {
//                 sh "docker rmi ${DOCKER_IMAGE}:${DOCKER_TAG}"
//             }
//         }
    }
}