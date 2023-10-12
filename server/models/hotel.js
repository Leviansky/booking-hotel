'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hotel.hasMany(models.Room)
      Hotel.hasMany(models.Booking)
    }
  }
  Hotel.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Name Hotel can't be empty`,
        },
      },
    },
    image: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Image can't be empty`,
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Description can't be empty`,
        },
      },
    },
    total_room: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(hotel, options) {
        hotel.image = hotel.image || 'https://i.pinimg.com/236x/fb/b6/04/fbb604d1ae6e1e5d1f1a5ee72b3af779.jpg'
        hotel.total_room = 0;
      }
    },
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};