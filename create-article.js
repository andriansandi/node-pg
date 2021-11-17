const { Article } = require('./models')

Article.create({
    title: "Post 1",
    body: "Post 2",
    approved: true
})
 .then(article => {
    console.log(article)
 })