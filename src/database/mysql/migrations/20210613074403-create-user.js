"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "User",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        roleId: {
          type: Sequelize.INTEGER(11),
          references: { model: "Role", key: "id" },
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        username: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: true,
          unique: true,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        token: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal(
            "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
          ),
        },
      },
      {
        engine: "InnoDB",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("User");
  },
};
