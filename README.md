# Deliss Beer

Deliss Beer is an Automatic Beer and Food Match Generator that gives
you the most suitable craft beer for your meal. You will find
options for meat, fish and veggie meals! Discover craft beers from
all around the world! You can also save your favorites in
your acount.

Live demo: delissbeer.netlify.app/

## Features:

- [x] Use of Punk Api public API;
- [x] Beers suitable for meat, fish and veggie meals;
- [x] Random display of 4 beers from each beer-food-match category;
- [x] Filter option for Alcohol by volume;
- [x] Login and Register Authentication made by scratch;
- [x] User database for favorite beers;

## Build with:

- JavaScript - React (create react app);
- CSS, Tachyons;
- Punk API;
- Node.js, Express.js;
- PostgreSQL;
- Deployment: Backend- Heroku, Frontend- Netlify;

## Project architecture:

```
|-src/
  |-components/   - main components to be shared with each style
  |-pages/        - containers that use shared components
|-App.js          - container component with routes
|-index.js        - js entry file

```

## Note:

-The Punk API takes Brewdog's DIY Dog and turns it into a searchable, filterable API that's completely free and open source.

- The API doesn't have links for more details of each beer.

## Setup:

#### To run this project:

```
$ git clone git@github.com:dianacpg/deliss_beer.git
$ cd your-project/
$ npm install
$ npm start

```

##### Then:

** The back end part of Deliss App [here](https://github.com/dianacpg/delissbackend) **

### Future improvements

- More secure Login and Register Authentication with: minimum 8 characters, accepts ASCII and UNICODE characters. Or use a library;
- Add user notifications on Register and login Autentication;

![Alt Text](https://media.giphy.com/media/3o85xjSETVG3OpPyx2/giphy.gif)
