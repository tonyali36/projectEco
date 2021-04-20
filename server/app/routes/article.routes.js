module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Article
    router.post("/", articles.create);
  
    app.use('/api/articles', router);
  };