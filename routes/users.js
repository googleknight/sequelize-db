const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, response) => {
    Models.User.findAll().then((result => result.map(row => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    }))))
      .then((result) => {
        response({
          data: result,
          statusCode: 200,
        });
      });
  },
},
{
  method: 'POST',
  path: '/users',
  handler: (request, response) => {
    Models.User.create({
      firstName: request.payload.firstName,
      lastName: request.payload.lastName,
    }).then((result) => {
      response({
        data: {
          id: result.dataValues.id,
          firstName: result.dataValues.firstName,
          lastName: result.dataValues.lastName,
        },
        statusCode: 201,
      });
    });
  },
},
];
