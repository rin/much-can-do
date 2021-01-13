# Much Can Do

_All your skills, beautifully visualized … or something_

![So Much Can Do](much-can-do.png?raw=true)

## 🥞 Stack

- Running on [Node](https://nodejs.org/en/) 🏃‍♀️
- Built on [GraphQL and Apollo](https://www.apollographql.com/) 🚀
- Made faster by [Next.js](https://nextjs.org/) 🚀
- Backed by [MongoDB](https://jestjs.io/) 🌱
- Tested with [jest](https://jestjs.io/) 🕵🏽‍♀️
- Polished with [eslint](https://eslint.org/) & [prettier](https://prettier.io/) ✨

## Prerequisites

- [node](https://nodejs.org/en/download/package-manager/) >= 14
- [yarn](https://classic.yarnpkg.com/en/docs/install)
- MongoDB
- Git

## Setting it up

- Clone the repository.

```
git clone git@github.com:rin/much-can-do.git
```

- Enter the main folder and install the dependencies:

```
cd much-can-do && yarn
```

- Navigate to the `server` folder and install its dependencies.

```
cd server && yarn
```

- Copy the `.env.example` and modify the `MONGO_DB_URI` to match the URI of the database you want to use. (To create a database, run your mongo client with `mongo`, then enter `use muchcando`.)

```
mv .env.example .env
```

## Running it

- Start the server.

```
cd server && yarn start
```

- Start the application.

```
yarn start
```

- You can see the GraphQL playground at `http://localhost:4000`.
- The app is running at `http://localhost:3000`.

## Known Issues / Left To Do

- Validations are missing for the New Skill form
- Edit Skill not working
- Delete Skill not working
- Frontend tests
