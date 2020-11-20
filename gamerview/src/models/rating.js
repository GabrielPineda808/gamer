module.exports = function (sequelize, DataTypes) {
    var rating = sequelize.define("rating", {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });

    rating.associate = function (models) {
  
      rating.belongsTo(models.game, {
        foreignKey: {
          allowNull: false
        },
      });
  
      rating.belongsTo(models.game);
    };
  
    return rating;
  }