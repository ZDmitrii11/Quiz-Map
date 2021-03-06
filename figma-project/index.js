const express = require('express')
const usersRouter = require('./routerController/router.controller')
const PORT = process.env.PORT || 3030




const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use('/api',usersRouter)


app.listen(PORT,()=>{console.log(`Port Start at ${PORT}`)})