const express = require('express')
const app = express()
const host = "localhost"
const port = 5355

app.use(express.text())

app.get('/home',(req,res)=>{
    res.send("<h1>Hola desde Home</h1>")
})

app.get('/home/query',(req,res)=>{
    console.log(req.query)
    res.send(`Estos son los querys y la query es ${req.query.saludo}`)
})

app.get('/home/body',(req,res)=>{
    const contBody = req.body
    console.log(contBody) 
    res.send(`El nombre que contiene el body es: ${contBody}`)
    //res.json(contBody)
})




// app.get('/persona/:name/:lastname',(req,res)=>{
//     let name = req.params.name
//     let lastname = req.params.lastname
//     console.log(req.params)
//     res.send(`<h1>Hola ${name} ${lastname}</h1>`)
// })
app.get('/persona/:name/:lastname',(req,res)=>{
    console.log(req.params)
    res.send(`Hola tu nombre es ${req.params.name} y tu apellido es ${req.params.lastname}`)
})

app.use((req, res)=>{
    res.status(404).send("<h1>Error 404</h1>")
})

app.listen(port,host,()=>{
    console.log(`El link de acc es http://${host}:${port}`)
})