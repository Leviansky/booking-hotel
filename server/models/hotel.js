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
    address: DataTypes.STRING,
    total_room: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};