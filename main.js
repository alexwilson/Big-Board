const express = require('express')
const next = require('next')

const boardController = require('./server/board-controller')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(_ => express())
.then(server => {

  server.get('/api/v1/board/:boardType/:boardId', boardController)

  /**
   * NextJS Tasks
   */
  server.get('/v1/board/:boardType/:boardId', (req, res) => {
    return app.render(req, res, '/board', Object.assign({}, req.params))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  return server
})
.then(server => server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
}))
