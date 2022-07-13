const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article1',
        createdAt: (new Date()).toDateString() +' - '+ (new Date()).toLocaleTimeString().toUpperCase() + ' (India Standard Time)',
        description: 'This is first article of our blog'
    },
    {
        title: 'Test Article2',
        createdAt: (new Date()).toDateString() +' - '+ (new Date()).toLocaleTimeString().toUpperCase() + ' (India Standard Time)',
        description: 'This is second article of our blog'
    }]
    res.render('index', {articles: articles})
})

app.listen(5000)