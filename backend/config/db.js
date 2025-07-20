const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI)
		console.log('mongoose running')
	} catch (err) {
		console.log(err.message)
	}
}

module.exports = connectDB
