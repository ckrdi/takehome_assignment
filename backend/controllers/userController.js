const User = require('../models/User')

exports.getUsers = async (req, res) => {
	const users = await User.find().select('-password')
	res.json(users)
}

exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id).select('-password')
		res.json(user)
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

exports.createUser = async (req, res) => {
	const { name, email, status, password } = req.body
	try {
		const user = new User({ name, email, status, password })
		await user.save()
		const read = await User.findById(user._id).select('-password')
		res.status(201).json(read)
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

exports.updateUser = async (req, res) => {
	const { name, email, status } = req.body
	try {
		const user = await User.findByIdAndUpdate(req.params.id, { name, email, status }, { new: true })
		const read = await User.findById(user._id).select('-password')
		res.json(read)
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

exports.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.json({ message: 'User has been deleted' })
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}
