var express = require('express');
var router = express.Router();

// Init Sequelize
const { Sequelize }  = require('sequelize');

// Connect ke DB
const sequelize = new Sequelize('belajar_postgres', 'postgres', 'sandi', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

/* GET home page. */
router.get('/', async(req, res, next) =>  {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
