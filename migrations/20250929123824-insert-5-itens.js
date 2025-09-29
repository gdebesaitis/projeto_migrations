'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens', [
      { descricao: 'Item A', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item B', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item C', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item D', createdAt: new Date(), updatedAt: new Date() },
      { descricao: 'Item E', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens', null, {});
  }
};
