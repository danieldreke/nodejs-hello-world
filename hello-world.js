// https://linuxhint.com/install-nodejs-linux-mint/
const http = require('http')
const port = 8080
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World!')
})
console.log('Server up and running')
server.listen(port, () => {
  console.log(`Open http://localhost:${port} in browser`)
})
