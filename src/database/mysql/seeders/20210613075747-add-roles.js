"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Role",
      [
        {
          name: "administrador",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Role",
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
      "Role",
      { id: { [Sequelize.Op.in]: [1, 2] } },
      {}
    );
  },
};
