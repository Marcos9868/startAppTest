# StartApp Movies API

## Description:

Selection test for startapp company. The project is a movie API with login system.

## Installation:

```bash
# NPM
$ npm install

# Yarn
$ yarn install
```

## Running the app:

```bash
# development
$ npm/yarn run start

# watch mode
$ npm/yarn run start:dev

# production mode
$ npm/yarn run start:prod
```

## How to use:

- First, contact the project author to request the archive of the environment variables. 
- Insert the file at the root of the application. 
- Because the database used was local, replace the values set in the.env file with yours.
- Run the application

## Login:

- When you sign in to the API, copy the following sample excerpt below:
```bash
{
  "username": "admin",
  "password": "admin"
}
```
- The expected result should be the same as this:
```bash
{
  "access_token": "yourTokenHere"
}
```
- After you run the route, go to the route check_authorization to authorize the token that was received. 
- Click the padlock at the top right of the route. 
- Paste the token and click authorize. 
- Run the route to see that we are allowed to continue in the API.
- The expected result should be the same as this:
```bash
Authorized
```

## Logout:

- If you want to exit the API, just click on the swagger authorize option, right at the beginning (top right).
- Click logout. 
- You are now outside the API and can no longer create, change, or delete data.

## Address of docs:

```bash
$ http://localhost:3333/api/docs
```

## Database:

- PostgreSQL

## Docs:

- Swagger

## Stay in touch:

- Author - [Marcos M. Ferreira](https://www.linkedin.com/in/marcos-melo-ferreira/)
