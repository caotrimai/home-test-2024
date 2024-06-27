pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'maicaotri/next-app'
        DOCKER_TAG = 'latest'
        DOCKERHUB_SECRET_ACCESS_KEY = credentials('dockerhub-secret-text')
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
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("${DOCKER_IMAGE}:${DOCKER_TAG}")
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