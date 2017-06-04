const server = require('./server')

server.listen(4000, () => {
  console.log('GraphQL API running at http://localhost:4000/graphql')
})
