"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Administrador",
          username: "admin",
          email: "admin@teste.com",
          password:
            "$2b$10$YNuhEHylkaxLrQop8BnLyuk1iDe8/zZekjEVFwJj41SrA1yUawLcC",
          roleId: 1,
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Kauê Malheiros Brasil",
          username: "kaue",
          email: "kaue@teste.com",
          password:
            "$2b$10$YNuhEHylkaxLrQop8BnLyuk1iDe8/zZekjEVFwJj41SrA1yUawLcC",
          roleId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "Users",
      { id: { [Sequelize.Op.in]: [1, 2] } },
      {}
    );
  },
};
