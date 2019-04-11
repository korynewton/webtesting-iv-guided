const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with status 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it('should respond with status 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should respond with status 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });

    it('should respond with status 200 OK, another way to test above', () => {
      return request(server)
        .get('/')
        .expect(200);
    });

    it('should return json', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.type).toBe('application/json');
        });
    });

    it('should return { api : up}', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: 'up' }); //must be toEqual as they are not the same objects
        });
    });
  });
});
