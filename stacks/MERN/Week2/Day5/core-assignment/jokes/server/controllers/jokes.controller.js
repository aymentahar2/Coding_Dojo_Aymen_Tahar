// CRUD operations

const Joke = require("../models/jokes.model")

module.exports.findAllJokes = (req, res) => {
        Jokes.find ()
        .then((allJokes) => {
            res.json(allJokes) // what it returns will be recieved in react
        })
        .catch(err => {
            res.json({ message: "Something went worng", serverError: err })
        })
}

module.exports.createJoke = (request, response) => {
   Joke.create(request.body)
        .then(newCreatedUser => {
            response.json({ joke: newCreatedUser })
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch(err => response.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}