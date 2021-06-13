module.exports = {
  dialect: "mysql",
  dialectModule: require("mysql2"),
  database: process.env.MYSQL_DATABASE || "bar_db",
  host: process.env.MYSQL_HOST || "localhost",
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  port: process.env.MYSQL_PORT || "3306",
  logging: true,
  benchmark: true,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
    acquire: 10000,
  },
  define: {
    freezeTableName: true,
    engine: "InnoDB",
    charset: "utf8",
    collate: "utf8_general_ci",
  },
};
