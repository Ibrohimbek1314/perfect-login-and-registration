const PORT = process.env.PORT || 4021
const Express =  require('./lib/router.js')
const res = require('express/lib/response')

const path = require('path')
const app = new Express()
const host = require('../netWork/network.js')

app.views(path.join(__dirname, 'views'))
app.public(path.join(__dirname, 'public'))

app.get('/', (req,res) => {
    res.render('index.html')
})

app.get('/login.html', (req, res) => {
    res.render('login.html')
})
 
app.get('/regsration.html', (req,res) => {
    res.render('regsration.html')
})

app.listen(PORT, () => console.log('Client server is running on http://' + host + ':' + PORT))
