'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addColumn('Authors', 'email', {
        allowNull: true,
        type: Sequelize.STRING,
      }),
      await queryInterface.addColumn('Authors', 'password', {
        allowNull: true,
        type: Sequelize.STRING,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
