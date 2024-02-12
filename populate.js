const knex = require('./src/db/knex');
const userMockData = require('./UU.json');

const addUserMock = async (mockData) => {
  console.log('start');
  await knex('users').insert(mockData);

  console.log('complete');
};

addUserMock(userMockData);
