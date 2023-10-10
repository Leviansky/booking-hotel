const { Room } = require('../models');
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
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    total_room: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(hotel, options) {
        hotel.total_room = 0;
      }
    },
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};