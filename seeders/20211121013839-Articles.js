'use strict';

const faker = require('faker')
let seedArticles = []

for(let i = 0; i < 10; i++) {
  const article = {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
    approved: (i % 2) ? true : false,
    authorId: Math.floor(Math.random() * 100) + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  seedArticles.push(article)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles', seedArticles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', seedArticles)
  }
};
