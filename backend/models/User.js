const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	status: { type: String, required: true },
	password: { type: String, required: true },
})

UserSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next()
	}

	const salt = bcrypt.genSaltSync()
	this.password = bcrypt.hashSync(this.password, salt)
	next()
})

module.exports = mongoose.model('User', UserSchema)
