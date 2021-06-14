const userRepository = require("../database/mysql/repositories/users");

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
}

module.exports = User;
