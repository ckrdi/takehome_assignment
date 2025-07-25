const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	const token = req.header('Authorization')
	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	try {
		const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
		req.user = decoded
		next()
	} catch (err) {
		res.status(401).json({ message: 'Unauthorized' })
	}
}
