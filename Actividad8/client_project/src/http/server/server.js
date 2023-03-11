const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/items',(req,res)=>{
    const data = {name:"Daniel", age:23}
    res.json(data)
})

const port = process.env.PORT || 5355

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
})


