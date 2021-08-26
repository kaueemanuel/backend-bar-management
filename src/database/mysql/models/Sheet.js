module.exports = (sequelize, DataTypes) => {
  const Sheet = sequelize.define("Sheet", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
  });

  Sheet.associate = function (models) {
    Sheet.hasMany(models.Order, { foreignKey: "orderId" });
  };

  return Sheet;
};
