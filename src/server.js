import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

app.get('/cats', (req, res) => {
  res.send({ cat: 'Kirby' })
})

app.post('/cats', (req, res) => {
  console.log(req.body)
  res.send({ message: 'hello' })
})

export const start = () => {
  app.listen(2000, () => {
    console.log('server is on port 2000')
  })
}
