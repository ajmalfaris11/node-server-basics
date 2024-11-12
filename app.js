const http = require('http')

const server = http.createServer(async (req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.write("Hello. i am here!")
        res.end()
    }
    else {
        res.end("no route present ")
    }
})

