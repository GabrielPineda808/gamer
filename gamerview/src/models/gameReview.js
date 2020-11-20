module.exports = function (sequelize, DataTypes) {
    var gameReview = sequelize.define("gameReview", {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    // game reviews go to game
    gameReview.associate = function (models) {
  
      gameReview.belongsTo(models.game, {
        foreignKey: {
          allowNull: false
        },
      });
  
      gameReview.belongsTo(models.game);
    };
  
    return gameReview;
  }