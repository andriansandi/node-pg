var express = require('express')
var router = express.Router()

// include model
const { Article, Author } = require('../models')

router.get('/api/', async (req, res, next) => {
    // Get all data artikel dari tabel Artikel
    try {
        var articles = await Article.findAll();
        console.log('articles: ' + articles);
        res.json(articles);
    } catch(error) {
        console.log(error)
    }
});

// Get data article =>> READ
// Route: /articles/
router.get('/', async (req, res, next) => {
    // Get all data artikel dari tabel Artikel
    try {
        var articles = await Article.findAll();
        console.log('articles: ' + articles);
        res.render('articles/index', {
            articleList: articles
        });
    } catch(error) {
        console.log(error)
    }
});

// Get detail data untuk endpoint /edit/:id
// SELECT * FROM articles WHERE id = :id
router.get('/edit/:id', async(req, res, next) => {
    try {
        const article = await Article.findByPk(req.params.id)

        // get all authors
        const authors = await Author.findAll()
        
        res.render('articles/form', {
            article: article,
            authors: authors
        })
    } catch (error) {
        console.error(error)
        res.status(500).send('internal server error')
    }
});

// Post untuk edit data => menampung data baru untuk disimpan di table
router.post('/update', async(req, res, next) => {
    try {
        console.log('REQ: ' + JSON.stringify(req.body))
        // UPDATE articles SET ...... WHERE id = ':id'
        await Article.update({
            title: req.body.title,
            body: req.body.body,
            approved: req.body.approved,
            authorId: req.body.authorId
        },{
            where: {
              id: req.body.id
            }
        });
        res.redirect('/articles')
    } catch(error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
})

// Menampilkan form tambah data article 
router.get('/add', async(req, res, next) => {
    try {
        // get all authors
        const authors = await Author.findAll()
        res.render('articles/form', {
            authors: authors
        })
    } catch(error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
})

router.post('/create', async(req, res, next) => {
    try {
        // INSERT INTO articles(xx,xx) values(xx,xx)
        await Article.create({
            title: req.body.title,
            body: req.body.body,
            approved: req.body.approved,
            authorId: req.body.authorId
        })
        res.redirect('/articles')
    } catch(error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
})

// DELETE data di table dengan ID = :id
router.get('/delete/:id', async(req, res) => {
    try {
        // DELETE FROM articles WHERE id = ':id'
        await Article.destroy({
            where: {
              id: req.params.id
            }
        });
        res.redirect('/articles')
    } catch(error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
})
  
module.exports = router;