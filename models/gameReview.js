module.exports = function (sequelize, DataTypes) {
    var gameReview = sequelize.define("gameReview", {
      posted: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    
    gameReview.associate = function (models) {
  
      gameReview.belongsTo(models.game, {
        foreignKey: {
          allowNull: false
        },
      });
    };
  
    return gameReview;
  };