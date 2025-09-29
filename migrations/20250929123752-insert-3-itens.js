'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', [
      { descricao: 'Item 1', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item 2', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item 3', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens', null, {});
  }
};
