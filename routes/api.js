/**
 * Routes untuk API 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 */

const express = require('express')
const router = express.Router()
const { body, check } = require('express-validator')
const validator = require('../middlewares/routes-validation')

// Controllers
const articleController = require('../controllers/articleController')
const userApiController = require('../controllers/api/userApiController')

// Validation
const validation = {
    authorRegistration: [
        check('email')
            .isEmail(),
        check('password')
            .isLength({ min: 4 })
    ]
}

// Articles
router.get('/articles', articleController.all)

// Author
router.post('/author/register', validator(validation.authorRegistration), userApiController.register)

module.exports = router