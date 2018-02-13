const Models = require('../../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, response) => {
    Models.users.findAll().then((result => result.map(row => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    })))).then((users) => {
      response({
        data: users,
        statusCode: 200,
      });
    });
  },
},
{
  method: 'POST',
  path: '/users',
  handler: (request, response) => {
    Models.users.create({
      // Create
      firstName: request.payload.firstName,
      lastName: request.payload.lastName,
    }).then(result => response({
      statusCode: 201,
      message: 'User created',
    }));
  },
},
{
  method: 'DELETE',
  path: '/users',
  handler: (request, response) => {
    Models.users.destroy({
      // Delete
      where: {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
      },
    }).then(result => response({
      statusCode: 200,
      message: 'User deleted',
    }));
  },
},
{
  method: 'PUT',
  path: '/users',
  handler: (request, response) => {
    Models.users.update(
      // Update
      {
        firstName: request.payload.newFirstName,
        lastName: request.payload.newLastName,
      },
      {
        where: {
          firstName: request.payload.firstName,
          lastName: request.payload.lastName,
        },
      },
    ).then(result => response({
      statusCode: 201,
      message: 'User updated',
    }));
  },
},
];
