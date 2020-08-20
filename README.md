# React Gallery

To set up this app, you must install node modules, pg, and material-UI. You should also set up your database -- table information has been provided in the database.sql file. Once you've done those things, run your client and server. 

## Description

Duration: weekend project

This is a personal gallery app that allows the user to neatly display pictures and descriptions. Each photo has a like button that tracks 'likes' from viewers and a delete button, both of which connect to the database. Users can add photos and descriptions via the webpage or directly into the database.

This app makes use of React components as well as material-UI for additional styling.

## Screenshot

![Gallery_App](public/images/screenshot.jpeg?raw=true")

## Prerequisites

- Node.js
- React
- Material-UI

## Installation

1. Create your database using the name: 'react_gallery'
2. The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an npm install
4. Install Material-UI and the following plug ins: TextField, Button, DeleteIcon, IconButton and Typograpgy.
5. Run npm run server in your terminal
6. Run npm run client in your terminal
7. The npm run client command will open up a new browser tab for you!

## Usage

1. Users wishing to share photos with friends and family will want to begin by adding their own photos.
2. Photos can be added several ways directly to the database or via the webpage. If the photo isn't already hosted on the internet, the user will also need to add the image to the Images file for the path to point to. 
3. Users will need want to deploy the app to share with others! Viewers can then interact with the gallery, including liking and deleting photos. 

## Built With

- React
- PostgreSQL
- Node.js
- Express.js
- JavaScript
- HTML

## Acknowledgement

Thanks to everyone at Prime Digital Academy who helped me gain the skills to build this app. 





