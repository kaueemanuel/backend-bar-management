const models = require("../models");

const find = async (query = {}) => {
  if (query.include && Array.isArray(query.include)) {
    query.include = [...query.include, { model: models.Roles }];
  } else {
    query.include = [{ model: models.Roles }];
  }
  query.attributes = { ...query.attributes, exclude: ["password"] };
  return await models.Users.findAll(query);
};
const count = async (query) => {
  return await models.Users.count(query);
};
const create = async (query) => {
  return await models.Users.create(query);
};

module.exports = {
  find,
  count,
  create,
};
