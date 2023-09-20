# Fancy Todo App | Using Node.js, Express.js, Prisma

Error handling in this application is still not very good, and needs improvement

**Endpoints**
- /user
    - GET `/user`: get users list
    - POST `/user`: create user
    - GET `/user/:id`: get user by id
    - PUT `/user/:id`: update user by id
    - DELETE `/user/:id` delete user by id
    - GET `/user/:id/todos`: get user data and todos
- /todo
    - GET `/todo`: get todos list
    - POST `/todo`: create todo
    - GET `/todo/:id`: get todo by id
    - PUT `/todo/:id`: update todo by id
    - DELETE `/todo/:id` delete todo by id

## Cloning the repository
```bash
git clone https://github.com/weiwei2694/fancy-todo-app.git
```
## Install Packages
```bash
npm install
```
## Start the app
```bash
npm run dev
```