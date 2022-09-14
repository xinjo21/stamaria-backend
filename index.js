import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// ROUTES IMPORTS
import Address from './routes/Address-routes.js'
import Business from './routes/Business-routes.js'
import Resident from './routes/Resident-routes.js'
import User from './routes/User-routes.js'

const app = express()
const PORT = process.env.PORT || 8000

dotenv.config()

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {useNewUrlParser: true},
  () => console.log('Connected to the database')
)

// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.use('/address', Address)
app.use('/business', Business)
app.use('/resident', Resident)
app.use('/user', User)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))