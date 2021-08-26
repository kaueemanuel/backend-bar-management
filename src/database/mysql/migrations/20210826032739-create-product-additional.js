'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Product_Additional', {
        id: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        productId: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: true,
          references: {
            model: "Product",
            key: "id"
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        additionalId: {
          type: Sequelize.INTEGER(11).UNSIGNED,
          allowNull: false,
          references: {
            model: "Additional",
            key: "id"
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        }
      }, {
        engine: 'InnoDB',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        transaction
      });
      await queryInterface.addIndex('Product_Additional', {
        name: 'unique_product_additional',
        fields: ['productId', 'additionalId'],
        unique: true
      }, { transaction })
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Product_Additional');
  }
};