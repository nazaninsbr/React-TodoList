pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/nazaninsbr/React-TodoList.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Create Dockerfile') {
            steps {
                writeFile file: 'Dockerfile', text: '''
                FROM nginx:alpine
                COPY build/ /usr/share/nginx/html
                '''.stripIndent()
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-todo-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f react-todo-container || true
                docker run -d -p 3000:80 --name react-todo-container react-todo-app
                '''
            }
        }
    }
}
