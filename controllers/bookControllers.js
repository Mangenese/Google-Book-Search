const db = require("../models");

module.exports = {
    findAll: function() {
   return db.Book.find({})
    },
  
    create: function(newbook) {
      console.log(newbook)
     return db.Book.create(newbook)
    },
  
    remove: function(id) {
      return db.Book
      .findById({ _id: id })
    }
  };