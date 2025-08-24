## Gratibox 😊

<div align="center">
  <h4>This is the frontend repo, access the backend repo <a href="https://github.com/cgabrieu/gratibox-backend">here</a>.</h4>
  <a href="https://gratibox-f.vercel.app">
    <img src="https://user-images.githubusercontent.com/25062334/144354678-760db174-fabb-41d1-a997-db36a92d044b.gif">
  </a>
    <br />
    <a href="https://gratibox-f.vercel.app">Try it out</a>
    <br />
</div>
  
<br/>

## About

A simple but wonderful application for you to express your gratitude.
    
<br/>

## Technologies

Tools that were used in the project:
<p>
  <img src='https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=white'>
  <img src='https://img.shields.io/badge/styled--components-000000?style=for-the-badge&logo=styled-components&logoColor=white'>
  <img src='https://img.shields.io/badge/eslint-000000?style=for-the-badge&logo=eslint&logoColor=white'>
  <img src='https://img.shields.io/badge/npm-000000?style=for-the-badge&logo=npm&logoColor=white'>
  <img src='https://img.shields.io/badge/Cypress-000000?style=for-the-badge&logo=cypress&logoColor=white'>
  <img src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'>
</p>
  
<br/>

## Getting Started

To run locally follow the steps

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Create the root folder named gratibox and access it
```sh
mkdir gratibox && cd gratibox
```
2. Clone the frontend repo
```sh
git clone https://github.com/cgabrieu/gratibox-frontend.git
```
3. Install dependencies with npm
```sh
npm install
```
4. Clone the backend repo
```sh
git clone https://github.com/cgabrieu/gratibox-backend.git
```
5. Install dependencies with npm
```sh
npm install
```
6. Create a database using the command below via postgres
```sh
CREATE DATABASE gratibox;
```
7. Automatically create all necessary tables to backend repo with <a href="https://github.com/cgabrieu/gratibox-backend/blob/main/dump.sql">dump</a>. 

8. Connect your backend to the database, for that, rename the .env.example to .env.dev and fill in your data.

### How to run

1. Run the frontend using the command (remember to be on the backend repo): 
```sh
npm run start:dev
```
2. Run the frontend using the command (remember to be on the fronend repo): 
```sh
npm start
```
