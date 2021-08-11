const http = require('http')

const file = require('fs');
const index = file.readFileSync('./index.html')
// Create http server.
var httpServer = http.createServer(function (req, resp) {
    console.log(`Received request: ${req.url}`)
    resp.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'text/html'
    });
    resp.write(index);
    resp.end();
});
const server = httpServer.listen(8888)
server.on('listening', () => {
    console.log('Listening on http://localhost:8888')
})