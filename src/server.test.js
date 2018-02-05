const Server = require('./server');
const Routes = require('../routes');

describe('Testing the server', () => {
  test('Should resturn success code on get request', (done) => {
    const request = {
      method: 'GET',
      url: '/users',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
