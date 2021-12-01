/**
 * Routes untuk Author 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 */

const router = require('express').Router()

// Controllers
const authorController = require('../controllers/authorController')

// Get Author dengan Parameter
// endpoint: /authors/detail/1
router.get('/detail/:id', authorController.byId)

module.exports = router