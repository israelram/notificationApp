const request = require('supertest');
const app = require('../index');
const Log = require('../models/log');

describe('POST /api/submit', () => {
  beforeEach(async () => {
    await Log.deleteMany({});
  });

  it('should create a new log', async () => {
    const message = 'This is a test message';
    const category = 'Sports';

    const response = await request(app)
      .post('/api/submit')
      .send({ message, category });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', message);
    expect(response.body).toHaveProperty('category', category);
    expect(response.body).toHaveProperty('createdAt');

    const logs = await Log.find({});
    expect(logs).toHaveLength(1);
    expect(logs[0]).toHaveProperty('message', message);
    expect(logs[0]).toHaveProperty('category', category);
  });

  it('should return a 400 error if the message is missing', async () => {
    const category = 'Sports';

    const response = await request(app)
      .post('/api/submit')
      .send({ category });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Message is required');

    const logs = await Log.find({});
    expect(logs).toHaveLength(0);
  });

  it('should return a 400 error if the category is missing', async () => {
    const message = 'This is a test message';

    const response = await request(app)
      .post('/api/submit')
      .send({ message });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Category is required');

    const logs = await Log.find({});
    expect(logs).toHaveLength(0);
  });
});
