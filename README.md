This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Ruinfindr

## About:

[Ruinfindr](https://ruinfindr.herokuapp.com/) 
Out on your morning constitutional and stumbled across an unmarked ruin? Set your coordinates, upload some photos, and get on your way. This app will help you keep track of all your favorite ruins as well as find new ones submitted by other users. All ruins are integrated with google maps so that you can see them on the map after they're added.  

I wanted to make the app accessible and not so heavily gated with mandatory registration and the extra steps to login/logout. My thinking was that the like functionality in the ruins grid would bring the most interesting additions to the top. That being said, all that functionality is still there under the hood with user schemas, session-based authentication, and front-end forms already coded out. The potential to gate some parts of the app would take just a a few small changes to the code. Some additional functionality could be added by integrating the ruins schema with the users.

## Features:
The user can:
- Set coordinates in order to get a more precise location on a ruin.
- Add ruins, like ruins, add reviews, ratings, etc
- See all user added ruins on a world map
- Search for ruins


- Attempted to get the grid to change dynamically based on number of elements in array and using Sass rather than through ReactJS. The only problem is that I don't really have access to the array in my sass file, so I created an arbitrary number for now. Maybe in some future iteration Sass will be able to communicate with other files via ES6 import/export modules?

```Javascript
@for $i from 1 through $rows {
  @if $i % 2 == 0 {
    .item-#{$i}:hover {
      background-color: rgba(120,51,51,.7);
      transition: .6s background-color;
      border: 1px solid black
    }
  } @else {
    .item-#{$i}:hover {
      background-color: rgba(54,120,144,.7);
      transition: .6s background-color;
      border: 1px solid black;
    }
  }
}
```


## The Build:
### Core tech:
- Javascript/HTML5/CSS3
- ReactJS
- MongoDB/Mongoose
- Node.js
- Express
### Other Tech:
- Sass
- Google Maps API
- Google Places AutoComplete API
- S3FileUpload to facilitate image upload to AWS


## Want to make your own improvements?
- Visit [Github](https://github.com/btaz21/ruins-final)
- Clone the repo
- Open the project in terminal and your text editor of choice
- Run ```npm install```
- Hook up a database
- In new terminal tab run ```nodemon```
- Also run ```npm start``` through the client folder
- Get to coding!


## Roadmap:
- Integrating user schema with the ruins schema. The schema has already been created, just needs to be integrated with the frontend.
- Allow users to have their own accounts where they can see the ruins they've added, edit them, delete them, etc
- Make it possible to add pins to the map and fetch the lat/lng from the map itself.


## Sources:
(https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States)
(https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6)
(https://css-tricks.com/star-ratings/)
(https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/ https://stackoverflow.com/questions/42060961/react-router-v4-link-for-form)
(https://www.freecodecamp.org/news/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5/)
(https://github.com/expressjs/session/issues/464)
