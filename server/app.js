require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const helmet = require('helmet')
const morgan = require('morgan')
const Student = require('./routes/student')


app.use(cors())
app.use(express.json())
app.use(helmet())


if (app.get('env') == 'development') {
  app.use(morgan('tiny'))
  console.log('morgan activated')
}



app.use('/api/v1/students',Student)

const port = process.env.APP_PORT || 4000

app.listen(port, () => {
  console.log(`app is running on ${port}`)})