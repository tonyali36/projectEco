module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      }
    });
  
    return Article;
  };