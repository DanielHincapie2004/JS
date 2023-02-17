const express = require('express')

const app = express()

app.post('/home', (req,res) => {
    res.send('Este es el home')
})

app.get('/home', (req,res) => {
    res.send('Este es el home')
})

app.use((req,res)=> {
    res.status('404').send('error')
})

app.listen(5355)