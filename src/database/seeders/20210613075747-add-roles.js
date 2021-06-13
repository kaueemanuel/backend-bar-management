"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "admin",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "employee",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "Roles",
      { id: { [Sequelize.Op.in]: [1, 2] } },
      {}
    );
  },
};
