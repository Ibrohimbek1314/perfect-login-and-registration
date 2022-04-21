const jwt = require('jsonwebtoken')
// console.log(jwt);
module.exports = (req, res, next) => {
	try {
		const payload = jwt.verify(req.headers.token, 'SECRET_KEY')
		return next()
	} catch(error) {
		res.status(401).json({ message: error.message })
	}
}