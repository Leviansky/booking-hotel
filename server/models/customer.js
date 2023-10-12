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
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Username can't be empty`,
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Password can't be empty`,
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: `Email can't be empty`,
        },
        isEmail: {
          message: `Format must be an email`,
        }
      },
    },
    name: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          message: `Image must be in url`,
        }
      },
    },
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function (customer, options) {
        customer.avatar = 'https://i.pinimg.com/236x/a2/fb/66/a2fb661618dd676884acb781c3ab38be.jpg'
        customer.name = customer.name || customer.username;
        customer.address = customer.address || '';
        customer.phone = customer.phone || '';
        customer.role = 'user';
      }
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};