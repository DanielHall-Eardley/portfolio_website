const express = require('express')
const app = express()
const path = require('path')
const env = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

/*This is the root server component, It initializes the 
server, connects to the database, registers url routes and
serves the static assets for the front end code*/

//Load .env config file if in local development environment
if (process.env.USERNAME === 'daniel') {
  const result = env.config({path: __dirname + '/.env'})
  if (result.error) {
    throw result.error
  }
}

const routes = require('./routes')
const corsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization']
}
//Allows cors access
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api', routes)

//Server static assets
app.use(express.static('dist'))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})  

//catch all thrown errors 
app.use((error, req, res, next) => {
  console.log(error)
  const status = error.status || 500
  const message = error.message || 'An Error occurred'
  res.status(200).json({error: message, status: status})
})

/*Connect to a cloud database or local database
depending on if the app is in a development or production
environment*/
let databaseConnect = process.env.MONGODB_URI
if (process.env.NODE_ENV === 'development') {
  databaseConnect = process.env.DATABASE_URL
}

mongoose.connect(databaseConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(result => {
  let port = process.env.PORT

  if (port === null || port === undefined) {
    port = 8000
  }

  app.listen(port)
})
.catch(error => {
  console.log(error)
})