const { decodeToken } = require('../helpers/jwt.js')

module.exports.authUser = async (req, res, next) => {
    try {
        const accessToken = req.headers.access_token
        if (accessToken === null) return res.status(401).json({ message: 'unauthorized user' })
        const tokenDecode = decodeToken(accessToken)
        req.userData = tokenDecode
        next()
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.authAdmin = async (req, res, next) => {
    try {
        const accessToken = req.headers.access_token
        const userAdmin = decodeToken(accessToken)
        const { role } = userAdmin;
        role !== 'admin'
        ? res.status(401).json({ message: 'Access forbidden' }) 
        : next()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}