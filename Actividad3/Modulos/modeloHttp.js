const http = require('http')
const fs = require('fs')

const host = 'localhost';
const port = 5355;



http.createServer((reques, response)=>{
    response.write(fs.readFileSync('index.html','UTF-8'))
    return response.end()
}).listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
})