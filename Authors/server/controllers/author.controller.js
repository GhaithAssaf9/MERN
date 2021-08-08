const Author = require('../models/author.model');
module.exports.createAuthor = (req, res) => {

    console.log(req.body);

    Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
    console.log("create an Author");
};
module.exports.getOneAuthor = (req, res) => {

    console.log(req.params.id);

    Author.findById(req.params.id)
        .then((oneAuthor) => {
            console.log(oneAuthor);
            res.json(oneAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
    console.log("get One Author");
};

module.exports.getAllAuthors = (req, res) => {


    Author.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            res.json(allAuthors);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
    console.log("get All Authors");
};



module.exports.updateAuthor = (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    console.log("updateAuthor");


    Author.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
        runValidators: true
    })
        .then((updatedAuthor) => {
            console.log(updatedAuthor);
            res.json(updatedAuthor);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};