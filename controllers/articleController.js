/**
 * Controller article 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 * @since   Nov 29, 2021
 */

const {
    Article 
} = require('../models')

module.exports = {
    all: async(req, res) => {
        try {
            let articles = await Article.findAll()
            res.json(articles)
        } catch(error) {
            res.sendStatus(500)
        }
    },
    // Tambah Data
    create: async(req, res) => {
        try {
            // INSERT INTO articles(xx,xx) values(xx,xx)
            const articles = await Article.create({
                title: req.params.title,
                body: req.params.body,
                approved: req.params.approved,
                authorId: req.params.authorId
            })
            res.json(articles)
        } catch(error) {
            console.error(error)
            res.sendStatus(500)
        }
    },
    edit: async(req, res) => {

    },
    destroy: async(req, res) => {
        
    }
}