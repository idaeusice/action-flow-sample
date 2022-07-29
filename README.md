## Overview
This workflow was designed to work with an application where the repository is structured in such a way where the App directory holds both the front and backend servers. 

For the workflow to be successful, the database would need to be started and both the express API and react frontend needed to be started and kept alive for the test suite to run successfully. 

This seemed to work for me for another project. The App itself was thrown together to demonstrate the github action flow. 

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
