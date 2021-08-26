module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  Product.associate = function (models) {
    Product.belongsToMany(models.Additional, { through: 'Product_Additional' });
  };

  return Product;
};
