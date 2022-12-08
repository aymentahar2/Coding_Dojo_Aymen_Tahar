// import the controller 
const jokeController = require("../controllers/jokes.controller")


//!modularize routes
module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes);
    app.post('/api/jokes', jokeController.createJoke);
    // app.get('/api/jokes/:id'
    // , jokeController.findOneJoke);
    app.put('/api/jokes/:id', jokeController.updateExistingJoke);
    app.delete('/api/jokes/:id', jokeController.deleteAnExistingJoke);
}