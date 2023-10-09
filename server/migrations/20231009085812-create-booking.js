'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataCheckin: {
        type: Sequelize.DATE
      },
      dataCheckout: {
        type: Sequelize.DATE
      },
      total_customer: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      CustomerId: {
        type: Sequelize.INTEGER
      },
      HotelId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};