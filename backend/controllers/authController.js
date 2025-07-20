const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.login = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })
		if (!user) {
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })

		res.json({
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				status: user.status,
			},
		})
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}

exports.getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		res.json({ user })
	} catch (err) {
		res.status(500).json({ message: 'Internal server error' })
	}
}
