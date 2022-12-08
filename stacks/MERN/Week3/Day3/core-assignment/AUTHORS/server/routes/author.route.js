// import the controller 
const { application } = require("express");
const {
    addAuthor,
    findAllAuthors,
    findOneAuthor,
    updateExistingAuthor,
    deleteAnExistingAuthor,
    addBook

} = require("../controllers/author.controller")


//!modularize routes////////

module.exports = (app) => {
    app.post('/api/authors', addAuthor); 
    app.get('/api/authors',findAllAuthors);
    app.get('/api/authors/:id',findOneAuthor);
    app.put('/api/authors/:id',updateExistingAuthor);
    app.delete('/api/authors/:id',deleteAnExistingAuthor);
    app.put('/api/authors/book/:id', addBook);


}