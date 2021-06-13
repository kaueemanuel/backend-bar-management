module.exports = (sequelize, DataTypes) => {
  const Sheets = sequelize.define("Sheets", {
    number: DataTypes.INTEGER,
  });

  return Sheets;
};
