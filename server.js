const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')






//Static files
app.use(express.static('public'))
app.set('layout', 'layouts/layout')




// Set Tempating Engine
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('views', __dirname + '/views')



app.get('/', (req, res) => {
    res.render('index')
})






app.listen(3000, () => {
    console.log('Server Ready')
})