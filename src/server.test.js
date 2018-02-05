const Server = require('./server');
const Routes = require('../routes');

describe('Testing server for different requests', () => {
  test('Should return 200 status code for sucessful GET request', (done) => {
    const request = {
      method: 'GET',
      url: '/users',
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Should return 200 status code for sucessful POST request', (done) => {
    const request = {
      method: 'POST',
      url: '/users',
      payload: JSON.stringify({ firstName: 'Shubham', lastName: 'Mathur' }),
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
