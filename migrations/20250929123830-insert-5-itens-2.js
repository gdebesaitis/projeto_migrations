'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', [
      { descricao: 'Item legal 1', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item legal 2', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item legal 3', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item legal 4', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item legal 5', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens', null, {});
  }
};
