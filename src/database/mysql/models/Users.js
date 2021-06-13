module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  Users.associate = function (models) {
    Users.belongsTo(models.Roles, { foreignKey: "roleId" });
  };

  return Users;
};
