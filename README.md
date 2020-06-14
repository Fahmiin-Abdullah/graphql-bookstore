# graphql-bookstore
This is a small application based off of this tutorial (https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f). The objective of the app is to be able to add and read books according to different authors. This includes displaying the list of books available in the DB and its detailed associations.

### Project details
The project is built on React with Node.js and Express server for the backend. The database used is MongoDB Atlas (https://www.mongodb.com/) which is a DBaaS provider for ease of use. The application is hosted on Heroku (https://www.heroku.com). Additionally, GraphQL (https://graphql.org/) was also used to easily query to the serverside endpoints.

### Instructions for use
1. A display of available books in the DB can be seen when the main page is loaded.
2. Enter required fields on the bottom-right form and click on the + button to save it to the DB. A entry shoudl appear on end of the books lists.
3. Click on individual books to view the book and author details.

### Final thoughts
1. This was a very entertaining project that helps me to practive more in developing APIs in Node and Express. MongoDB Atlas came through again with the ease of setting up and connecting, I highly recommend them if you're looking to get started with a free-tier NoSQL plan that is cloud-hosted.
2. React is a new technology to me and going through the project reminded me of why I avoided it in the first place. The use of JSX and mixing of HTML and JS is not to my taste really. Coming from an Angular and Vue background, it definitely feels weird at first being quite verbose in accomplishing the same tasks like 2 way binding. Would definitely look forward to practicing more on this framework.