const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/users',
  handler: (request, response) => {
    Models.User.findAll().then((result) => {
      response({
        data: result,
        responseCode: 200,
      });
    });
  },
},
];
