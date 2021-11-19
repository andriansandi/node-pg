const { Article } = require('./models')

Article.create({
    title: "Post 2",
    body: "Post 3",
    approved: true,
    author: "John 1"
})
 .then(article => {
    console.log(article)
 })

 Article.create({
    title: "Post 3",
    body: "Post 4",
    approved: false,
    author: "John 5"
})
 .then(article => {
    console.log(article)
 })