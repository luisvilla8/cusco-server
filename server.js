const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
// server.listen(3000, () => {
//   console.log('CUSCO SERVER is running ...')
// })

const PORT = process.env.PORT || 5000;
server.listen( PORT, () => {
  console.log(`CUSCO SERVER is running ...PORT: ${PORT}`);
})