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

//Routers
const indexRouter = require('./routers/index')
const signupRouter = require('./routers/signup')
const signInRouter = require('./routers/signIn')
const faqsRouter = require('./routers/faqs')

//load the router module into the application:
app.use('/', indexRouter)
app.use('/signup', signupRouter)
app.use('/signin', signInRouter)
app.use('/faqs', faqsRouter)




app.listen(3000, () => {
    console.log('Server Ready')
})