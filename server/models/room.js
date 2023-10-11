'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.hasOne(models.Booking)
    }
  }
  Room.init({
    roomNumbers: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    HotelId: DataTypes.INTEGER,
    BookingId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(room,options) {
        room.status = 'available'
      }
    },
    sequelize,
    modelName: 'Room',
  });
  return Room;
};