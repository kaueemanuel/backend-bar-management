module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define("Roles", {
    name: DataTypes.STRING,
  });

  return Roles;
};
