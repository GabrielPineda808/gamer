module.exports = function (sequelize, DataTypes) {
    const Game = sequelize.define("game", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      developer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "This game has no description"
      }

    });

    Game.associate = function (models) {
        Game.hasMany(models.gameReview, {
          onDelete: "cascade"
        });
      };
    
  
    return Game;
  };