const models = require("../models");
const Op = models.Sequelize.Op;

const find = async (query = {}) => {
  if (query.include && Array.isArray(query.include)) {
    query.include = [...query.include, { model: models.Role }];
  } else {
    query.include = [{ model: models.Role }];
  }
  query.attributes = { ...query.attributes, exclude: ["password"] };
  return await models.User.findAll(query);
};
const count = async (query) => {
  return await models.User.count(query);
};
const create = async (data) => {
  return await models.User.create(data);
};

const update = async (data, where) => {
  return await models.User.update(data, where);
};
const destroy = async (userIds) => {
  const transaction = await models.sequelize.transaction();
  console.log(userIds)
  try {
    await models.User.destroy({
      where: {
        id: { [Op.in]: userIds },
      },
    });

    await transaction.commit();
    return true;
  } catch (error) {
    await transaction.rollback();
    return Promise.reject(error);
  }
};

module.exports = {
  find,
  count,
  create,
  update,
  destroy,
};
