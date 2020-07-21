This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Ruinfindr

![Login Page](https://i.imgur.com/wdkqCI4.png "Login Page")

## About:

[Ruinfindr](https://ruinfindr.herokuapp.com/) Out on your morning constitutional and stumbled across an unmarked ruin? Set your coordinates, upload some photos, and voila. This app will help you keep track of all your favorite ruins as well as find new ones from other users.  

## Features:
The user can:
- Set coordinates in order to get a more precise location on a ruin.
- Add ruins, like ruins, add reviews, ratings, etc
- See all user added ruins on a world map
- Search for ruins

## The Build:
### Core tech:
- Javascript/HTML5/CSS3
- ReactJS
- MongoDB/Mongoose
- Node.js
- Express
### Other Tech:
- Google Maps API
- S3FileUpload


## Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Thurs 6/18    | Set up CRA, set up backend, created some sketches of design, came up with a schema/model |
| Sat 6/20      | Got geolocation to work, started on frontend  |
| Sun 6/21      | Completed park restful routes, Started CSS Styling      |
| Mon 6/22      | CSS work, bug fixes, started README     |
| Tues 6/23     | We originally planned to add some final features, but had to fix some major bugs instead.      |


## Want to make your own improvements?
- Visit [Github](https://github.com/btaz21/ruins-final)
- Clone the repo
- Open the project in terminal and your text editor of choice
- Run ```npm install```
- Run ```mongod```
- In new terminal tab run ```nodemon```
- Get to coding!


## :sweat: Features:
```Javascript
router.put('/:id/:index', (req, res) => {
  console.log(req.body);
  Park.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPark) => {
    User.findById(req.session.user._id, (error, foundUser) => {
      foundUser.parks.splice(req.params.index, 1, updatedPark)
      foundUser.save((error, data) => {
        res.json(data)
        })
      })
    })
  })
  ```


## Roadmap:
- Integrating user schema with the ruins schema. The schema has already been created, just needs to be integrated with the frontend.
- Allow users to have their own accounts where they can see the ruins they've added, edit them, delete them, etc


## :blue_book: Sources:
- Info about the national parks for our admin account  
[Wikipedia](https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States)
