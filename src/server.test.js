const Server = require('./server');
const Routes = require('./routes');

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
  test('Adding a new user into db, should add and return success code 201 ', (done) => {
    const request = {
      method: 'POST',
      url: '/users',
      payload: JSON.stringify({ firstName: 'Shubham', lastName: 'Mathur' }),
    };
    Server.inject(request, (response) => {
      expect(response.result.statusCode).toBe(201);
      done();
    });
  });
  test('Should return first name and lastname for ', (done) => {
    const request = {
      method: 'GET',
      url: '/users',
    };
    Server.inject(request, (response) => {
      expect(response.result.data[0].firstName).toBe('Priya');
      expect(response.result.data[0].lastName).toBe('Gupta');
      done();
    });
  });
  test('Should update firstname and lastname and  ', (done) => {
    const request = {
      method: 'PUT',
      url: '/users',
      payload: JSON.stringify({
        firstName: 'Shubham', lastName: 'Mathur', newFirstName: 'Priya', newLastName: 'Gupta',
      }),
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Should delete the data and return success code ', (done) => {
    const request = {
      method: 'DELETE',
      url: '/users',
      payload: JSON.stringify({ firstName: 'Shubham', lastName: 'Mathur' }),
    };
    Server.inject(request, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
