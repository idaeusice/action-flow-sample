## Overview
This workflow was designed to work with an application where the repository contains the front and backend servers. For the workflow to be successful, the database would need to be started and both the express API and react frontend needed to be started and kept alive for the test suite to run successfully. 

## Project Structure
```rb
PROJECT
    ↳ App
    ⏐  ↳ Frontend (React)
    ⏐  ⏐  ↳ Frontend
    ⏐  ↳ Backend (Node / Express)
    ⏐  ↳ Dashboard
    ↳ Documentation
    ↳ Testing
```