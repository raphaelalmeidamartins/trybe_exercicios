'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      email: 'johndoe@gmail.com',
      'password_hash': 'dflasdkjflkasdjlfkf',
      name: 'John Doe',
      phone: '99 99999 9999',
      'created_at': Sequelize.literal('CURRENT_TIMESTAMP'),
      'updated_at': Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
