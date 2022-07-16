const express = require('express')
const mongoose =require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',{               //line of codes to connect our database with the help of mongoose
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("Database connected!"))
.catch(err => console.log(err))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

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
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

app.listen(5000)