# Form
This is an example of a form that takes a name, email and address as input, and saves them to a MongoDb database.
The frontend was made with angular, and the backend with NestJs.

## To run Server
* Run `cd backend`, then `npm install` to install dependencies.
* Run `nest build` from the backend folder, to build the server.
* Run `start` command in `backend/package.json` or run `nest start` from the terminal to start server.\
If you get an error while running which says that `dist/main` is missing, please check if the build has finished, if it still doesn't work run the `start:prod` command in `backend/package.json` or `node dist/backend/src/main` from the terminal

## To run Frontend
* Run `cd ../frontend` if you are in the backend folder, or `cd frontend` if you are in the root folder.
* Run `npm install` to install dependencies.
* Run `ng serve --proxy-config proxy.config.json` from the terminal, or the `start` command in `frontend/package.json`.
