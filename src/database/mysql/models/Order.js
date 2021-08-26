module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });

  Order.associate = function (models) {
    Order.belongsTo(models.User, { foreignKey: "userId" });
    Order.belongsTo(models.Sheet, { foreignKey: "sheetId" });
    Order.belongsTo(models.Product, { foreignKey: "productId" });
    Order.belongsToMany(models.Additional, { through: 'Order_Additional' });
  };

  return Order;
};
