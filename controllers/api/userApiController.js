/**
 * Controller Api User 
 * 
 * @author  Sandi Andrian <andrian.sandi@gmail.com>
 * @since   Nov 29, 2021
 */

const { 
    Author
} = require('../../models')

module.exports = {
    login: async(req, res) => {
        // 1. check parameter email dan password kosong atau tidak ?
        if (typeof req.email == undefined && typeof req.password == undefined) {
            res.status(400).json({
                message: 'email dan password is required'
            })
        } else {
            try { 
                // 2. check di database apa ada Author dengan email tersebut ?
                const AuthorFind = await Author.findOne({
                    where: {
                        email: req.email,
                    }
                })

                if(AuthorFind.length > 0) {
                    // Users exists
                    // 3. Check password apakah sama atau tidak, password-nya plain
                    if(AuthorFind.password == req.password) {
                        res.status(200).json({
                            message: 'Anda dapat masukk ke website ini'
                        })
                    } else {
                        res.status(401).json({
                            message: 'Email / Password anda salah'
                        })
                    }
                } else {
                    res.status(404).json({
                        message: 'User tidak ditemukan'
                    })
                }

            } catch (error) {

            }
        }
        
    },
    register: async(req, res) => {
        // diproses
        try {
            await Author.create({
                firstName: req.firstName,
                lastName: req.lastName
            })
            res.sendStatus(200).json({
                message: "Author telah berhasil di-insert",
                author: {
                    firstName: req.firstName,
                    lastName: req.lastName
                }
            })
        } catch(error) {

        }
    }
}