# Form
This is an example of a form that takes a name, email and address as input, and saves them to a MongoDb database.
The frontend was made with angular, and the backend with NestJs.

## To run Server
Run `cd backend`, then `npm install` to install dependencies.\
Run `nest build` from the backend folder, to build the server.\
Run `start:dev` command in `backend/package.json` or run `node dist/backend/src/main` from the terminal to start server.

## To run Frontend
Run `cd ../frontend` if you are in the backend folder, or `cd frontend` if you are in the root folder.\
Run `npm install` to install dependencies.\
Run `ng serve --proxy-config proxy.config.json` from the terminal, or the `start` command in `frontend/package.json`.
