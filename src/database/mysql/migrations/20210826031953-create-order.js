"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Order",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER(11),
        },
        userId: {
          type: Sequelize.INTEGER(11),
          references: { model: "User", key: "id" },
        },
        sheetId: {
          type: Sequelize.INTEGER(11),
          references: { model: "Sheet", key: "id" },
        },
        productId: {
          type: Sequelize.INTEGER(11),
          references: { model: "Product", key: "id" },
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        paid: {
          allowNull: false,
          defaultValue: false,
          type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("Order");
  },
};
