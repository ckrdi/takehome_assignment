const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('../models/User')

async function seed() {
  dotenv.config()
  mongoose.connect(process.env.MONGO_URI)
  const admin = new User({
    name: 'Admin',
    email: 'admin@example.com',
    status: 'Active',
    password: 'password',
  })
  await admin.save()
  console.log('Admin user created')
  mongoose.disconnect()
}

seed()
