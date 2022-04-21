const GET = (req, res) => {
	res.json(req.select('users'))
}

module.exports = {
	GET
}