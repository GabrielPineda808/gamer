
module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define("game", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      }

  });

  User.associate = function (models) {
    User.hasMany(models.gameReview, {
      onDelete: "cascade"
    });
    User.hasMany(models.rating, {
      onDelete: "cascade"
    });
  };

  return User;
};