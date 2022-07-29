## Overview
This workflow was designed to work with an application where the repository is structured in such a way where the App directory holds both the front and backend servers. 

For the workflow to be successful, the database would need to be started and both the express API and react frontend needed to be started and kept alive for the test suite to run successfully. 

Requires MySQL to be setup on the backend host server.

The App itself was loosely thrown together to demonstrate the github action flow, but in itself acts as a sample where a to-do list is re-rendered after POST is made to the API. 

## Project Structure
```rb
PROJECT
    ↳ App
    ⏐  ↳ Frontend (React)
    ⏐     ↳ Cypress
    ⏐  ↳ Backend (Node / Express)
    ↳ Documentation
    ↳ Testing
```

### Running the Project Locally:
fork or otherwise download the repository.
ensure MySQL can run and is operating on the same ports defined in app/Backend/server.js - create a database using a command like `'CREATE DATABASE IF NOT EXISTS test;'`.
run `npm install | npm start` from the app/Backend and app/Frontend directories to download and install dependencies and start the express.js API and react app. 
