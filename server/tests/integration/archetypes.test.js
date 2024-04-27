const request = require('supertest');
const app = require('../Archetypes API'); 

describe('Integration Testing: Archetypes API', () => {
  test('GET /api/archetypes', async () => {
    const response = await request(app).get('/api/archetypes');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(Array.isArray(response.body)).toBe(true);
  });
});