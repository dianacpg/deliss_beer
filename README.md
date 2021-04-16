# Deliss

Deliss is an automatic weekly meal plan generator app that gives you meal ideas for breakfast, lunch and dinner. 3 recipes for each day of the week! You can also save your favorite recipes in your acount.

Live demo: https://deliss.netlify.app/

## Features:

- [x] Use of EDAMAM public API;
- [x] Weekly meal plans for breakfast, lunch and dinner;
- [x] Random recipe combinations for meal plan;
- [x] Personalized meal plans for Vegetarians and Vegans;
- [x] Login and Register Authentication made by scrach;
- [x] User database for favorite recipes;

## Build with:

- JavaScript - React (create react app);
- CSS, Tachyons;
- EDAMAM recipe serch API;
- Node.js, Express.js;
- PostgreSQL;
- Deployment: Backend- Heroku, Frontend- Netlify;

## Project architecture:

```
|-src/
  |-components/   - main components to be shared
  |- img/         - images
  |-pages/        - containers that use shared components
  |-styles/       - css files
|-App.js          - container component with routes
|-index.js        - js entry file

```

## Note:

- With EDAMAM API, it is possible to filter recipes by choosing some labels like vegetarian, no-sugar, paleo, vegan, no-alcohol etc. But some recipes share contraditory labels so our filter won't work 100%.
  Example: If we filter Vegetarian, we can receive a recipe with "vegetarian" and "piscitarian" labels.

## Setup:

#### To run this project:

```
$ git clone git@github.com:dianacpg/delissfrontend.git
$ cd your-project/
$ npm install
$ npm start

```

##### Then:

- Register on [EDAMAM API](https://developer.edamam.com/) and get your keys;
- Put your keys on the Environment Variables:

* REACT_APP_EDAMAM_API_ID=
* REACT_APP_EDAMAM_API_KEY=

** The back end part of Deliss App [here](https://github.com/dianacpg/delissbackend) **

### Future improvements

- More secure Login and Register Authentication with: minimum 8 characters, accepts ASCII and UNICODE characters. Or use a library;
- Add user notifications on Register and login Autentication;
- Grocery list for weekly meal plans

![Alt Text](https://media.giphy.com/media/lKQ4k6JMgf1OoeIcVf/giphy.gif)
