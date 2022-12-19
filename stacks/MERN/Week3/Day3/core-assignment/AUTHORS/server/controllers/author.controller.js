// CRUD operations

const Author = require("../models/author.model");

//--------------Create Authors----------

module.exports.addAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.json(newAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

//--------------Gett All Authors---------

module.exports.findAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      res.json(allAuthors); // what it returns will be recieved in react
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

//---------------------FindOnAuthors---------

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => {
      res.json(oneAuthor);
    })
    .catch((err) => res.status(400).json(err));
};

//----------------------updateExistingAuthor-----

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedAuthor) => res.json({ updatedAuthor }))
    .catch((err) => res.status(400).json(err));
};

//--------------deleteExistingAuthor-----------

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.status(400).json(err));
};

//.********************books********************

module.exports.addBook = (req, res) => {
  Author.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { books: req.body } },
    { new: true, runValidators: true }
  )
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
};
