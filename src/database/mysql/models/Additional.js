module.exports = (sequelize, DataTypes) => {
  const Additional = sequelize.define("Additional", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
    }
  });

  Additional.associate = function (models) {
    Additional.belongsToMany(models.Product, { through: 'Product_Additional' });
    Additional.belongsToMany(models.Order, { through: 'Order_Additional' });
  };

  return Additional;
};
