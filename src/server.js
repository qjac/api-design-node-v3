import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by') // https://github.com/expressjs/discussions/issues/39

// these are middleware to run functions to transform the data before the controller gets or posts or...
// middleware does not respond to req, it just transforms it and sends it on to the next one
// ok, they aren't designed to respond to requests like controllers, but they can if they need to/you make them
app.use(cors()) // makes the server CORS enabled
app.use(json()) // transforms the request into easily digested JSON. The node way w/o express is hard
app.use(urlencoded({ extended: true })) //allows us to attach params to url query string
app.use(morgan('dev')) // does logging when server starts up

// let's make our own middleware
// next param is a fn in express that calls the next middleware
const log = (req, res, next) => {
  console.log('logging')
  next() // if you call next with an arg, the arg is an error msg that gets passed along
}

// this is a controller!
// the final fn that runs before respone. between request and response

// add your custom middleware as an arg in your controller to run before. this will only run for this route.
// to run for all routes use `app.use(log)`
// to run several in sequence, use an array `[log, log, otherMW, log]`
app.get('/data', log, (req, res) => {
  res.send({ message: 'hello again' })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(2000, () => {
    console.log('server running on port 2000')
  })
}
