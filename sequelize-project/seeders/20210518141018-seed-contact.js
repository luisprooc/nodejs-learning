'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts",[
      {
        firstname: "Nattaly",
        lastname: "Infante",
        phone: "000000000",
        email: "nattaly@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: "Jarl",
        lastname: "Lopez",
        phone: "1111111",
        email: "jarl@example.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
