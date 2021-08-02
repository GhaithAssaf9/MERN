const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:_id", JokeController.findOneSingleJoke);
  app.get("/api/jokes/random", JokeController.findRandomJokes);
  app.post("/api/jokes/new", JokeController.createNewJoke);
  app.put("/api/update/:_id", JokeController.updateExistingJoke);
  app.delete("/api/jokes/delete/:_id", JokeController.deleteAnExistingJoke);
};