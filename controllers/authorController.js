/**
 * Controller Author 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 * @since   Dec 1, 2021
 */

const { 
    Author, 
    Author_Biodata,
    Article
} = require('../models')

module.exports = {
    all: async(req, res) => {
        // do nothing
    },
    byId: async(req, res) => {
        // get data params 
        try {
            const authorId = req.params.id
            const author = await Author.findByPk(authorId, { 
                include: [
                    { model: Author_Biodata },
                    { model: Article }
                ]
            })
            // res.status(200).json(author)
            res.render('authors/detail', {
                author: author
            })
        } catch (error) {
            res.status(500).json({
                message: "error"
            })
        }
    }
}