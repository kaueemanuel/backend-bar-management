"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "administrador",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "funcionário",
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
