'use strict';

const faker = require('faker')

const authors = [...Array(100)].map((author) => (
  {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Authors', authors, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Authors', authors, {})
  }
};
