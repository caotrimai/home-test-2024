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
                    withCredentials([string(credentialsId: 'dockerhub-secret-text', variable: 'TOKEN')]) {
                        dockerImage.push("${DOCKER_IMAGE}:${DOCKER_TAG}")
                   }
                }
//                 withCredentials([string(credentialsId: 'dockerhub-secret-text', variable: 'DOCKERHUB_SECRET')]) {
//                     script {
//                         withDockerRegistry([url: 'https://registry.hub.docker.com', credentialsId: 'dockerhub-secret-text']) {
//                             dockerImage.push()
//                         }
//                     }
//                 }
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