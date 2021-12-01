/**
 * Routes untuk API 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 */

const express = require('express')
const router = express.Router()
// oneOf, check
const { oneOf, check } = require('express-validator')
const validator = require('../middlewares/routes-validation')

// Controllers
const articleController = require('../controllers/articleController')
const userApiController = require('../controllers/api/userApiController')

// Validation
// author.validator.js
const validation = {
    authorRegistration: [
        check('email')
            .isEmail()
            .trim()
            .withMessage('Format email salah, contoh: student@binar.co.id'),
        check('password')
            .isLength({ min: 4 })
            .withMessage('Password minimal 4 karakter'),
        check('nama')
            .isLength({ min: 2 })
            .withMessage('Nama harus lebih dari 2 karakter')
    ],
    authorLogin: [
        check('email')
            .isEmail()
            .trim()
            .withMessage('Format email salah, contoh: student@binar.co.id'),
        check('password')
            .isLength( { min: 6 })
            .withMessage('Password minimal 6 karakter')
    ]
}

// Articles
router.get('/articles', articleController.all)

// Author
// router.post('/author/register', validator(validation.authorRegistration), userApiController.register)
router.post('/author/login', validator(validation.authorLogin), userApiController.login)
router.post('/author/register', validator(validation.authorRegistration),userApiController.register)

module.exports = router