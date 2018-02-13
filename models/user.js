module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return user;
};
