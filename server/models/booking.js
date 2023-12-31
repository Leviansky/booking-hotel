'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Customer)
      Booking.belongsTo(models.Hotel)
      Booking.belongsTo(models.Room)
    }
  }
  Booking.init({
    dataCheckin: DataTypes.DATE,
    dataCheckout: DataTypes.DATE,
    total_customer: DataTypes.INTEGER,
    status: DataTypes.STRING,
    CustomerId: DataTypes.INTEGER,
    HotelId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(booking, options) {
        booking.status = 'unpaid'
      }
    },
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};