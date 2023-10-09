'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Booking)
    }
  }
  Customer.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function(customer, option) {
        customer.name = customer.name || customer.username;
        customer.address = customer.address || '';
        customer.phone = customer.phone || 0;
      }
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};