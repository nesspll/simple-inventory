const os = require('os');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:admin@example.com:5432/postgres');

module.exports = {
  env: 'localhost',

  /**
   * PostgreSQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'admin',
    database: 'postgres',
    host: 'localhost:5432',
    logging: console.log,
  },


  /**
   * MySQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'development',
  //   host: 'localhost',
  //   logging: console.log,
  // },

  /**
   * Secret used to Sign the JWT (Authentication) tokens.
   */
  authJwtSecret: '<place a generated random value here>',

  /**
   * Directory where uploaded files are saved.
   * Default to temp.
   */
  uploadDir: os.tmpdir(),

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: '<insert client url here>',

  /**
   * When this email is set, all requests will automatically authenticate using this email.
   * Useful for testing purposes.
   */
  userAutoAuthenticatedEmailForTests:
    null,


};
