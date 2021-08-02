const Joke = require("../models/jokes.model");
const random = require('mongoose-random');


module.exports.findAllJokes = (req, res) => {
  Joke.find(req.body)
    .then(findAll => res.json({ message: "successful", jokes: findAll }))
    .catch(err => res.json({ message: "Something wrong", error: err }));
};

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
    .catch(err => res.json({ message: "Something wrong", error: err }));
};


module.exports.findRandomJokes = (req, res) => {
  var counter = Joke.countDocuments(); 
  var randjoke = Math.floor(Math.random() * counter);
  Joke.findOne().skip(randjoke).limit(10).exec()
    .then(randomJokes => res.json({ joke: randomJokes }))
    .catch(err => res.json({ message: "Something Wrong", error: err }));
};


module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something wrong", error: err }));
};



module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something wrong", error: err }));
};


module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something wrong", error: err }));
};
