module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}),


  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
