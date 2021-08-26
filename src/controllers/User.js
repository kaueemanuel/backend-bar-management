const userRepository = require("../database/mysql/repositories/users");
const Bcrypt = require('../helpers/bcrypt');
const bcrypt = new Bcrypt();

class User {
  async find(attributes) {
    let query = {};
    let where = {};
    let limit;
    let offset;
    if (attributes) {
      if (attributes.limit) {
        limit = parseInt(attributes.limit);
        delete attributes.limit;
      }
      if (attributes.offset) {
        offset = parseInt(attributes.offset);
        delete attributes.offset;
      }
      let attributesKeys = Object.keys(attributes);
      if (attributesKeys.length > 0) {
        attributesKeys.forEach((attribute) => {
          where[attribute] = attributes[attribute];
        });
      }
    }
    query.where = where;

    const users = await userRepository.find({
      ...query,
      limit,
      offset,
    });
    const usersCount = await userRepository.count({
      ...query,
      limit: undefined,
      offset: undefined,
    });

    return {
      rows: users,
      count: usersCount,
    };
  }

  async create(body) {
    if(body.password) {
      body.password = bcrypt.generateHash(body.password);
    }
    
    return {
      rows: await userRepository.create(body),
      count: 1,
    };
  }

  async update(body, params) {
    if(body.password) {
      body.password = bcrypt.generateHash(body.password);
    }
    await userRepository.update(body, {where: {id: params.id} });
    return {
      rows: await userRepository.find({where: {id: params.id} }),
      count: 1,
    };
  }

  async delete(ids) {
    await userRepository.destroy(ids);
  }
}

module.exports = User;
