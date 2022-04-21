const express = require('express')
const PORT = process.env.PORT || 4020
const host = require('./netWork/network.js')
const app = express()

const modelMiddleware = require('./middlewares/model.js')
const authTokenMiddleware = require('./middlewares/authToken.js')

app.use(express.json())
app.use(express.text())

const userRouter = require('./routes/user.js')
const authRouter = require('./routes/auth.js')

app.use('/auth', authRouter)
app.use(authTokenMiddleware)
app.use('/users', userRouter)

app.listen(PORT, () => console.log('server is running on http://' + host + ':' + PORT))