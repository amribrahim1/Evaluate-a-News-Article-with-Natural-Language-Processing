# (Udacity) Evaluate a news article with Natural Language Processing

This's an app allows users to run Natural Language Processing (NLP) on articles or blogs from any websites.

The News API includes endpoints that provide both retrieval and analysis features that allow you to search, collect, and analyze news content at scale. Each of our eight endpoints returns a different type of data. Click on each endpoint's documentation on the list to the left or search this page to find documentation on a specific parameter.

It uses [AYLIEN](https://docs.aylien.com/textapi/endpoints)  api ,
[Node js](http://nodejs.org/)  server side,
[WebPack 4](https://webpack.js.org/) front-end (client side),
[Jest](https://jestjs.io/) for testing,
[sass-loader](https://webpack.js.org/loaders/sass-loader/),
[babel-loader](https://github.com/babel/babel-loader),
RegExp to check the url.

You can run it in development mode:
$ npm run build-dev
at port 8080

Or, you can generate dist folder contaning the app:
$ npm run build-prod

You have to run the server to run the AYLIEN api:
$ npm run start
It'll run at port 8081

You can test the functions to make sure that they run successfully (using Jest)
$ npm run test

This projec is the 4th project of ([Udacity NANODEGREE PROGRAM Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)) course.
