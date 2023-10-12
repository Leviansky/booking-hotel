const { decodeToken } = require('../helpers/jwt.js')

module.exports.authUser = async (req, res, next) => {
    try {
        //GET ACCESS_TOKEN FROM HEADERS
        const accessToken = req.headers.access_token

        //SEND 401 IF THERE'S NO ACCESS_TOKEN
        if (accessToken === null) return res.status(401).json({ message: 'unauthorized user' })
        
        //DECODE DATA FROM ACCESS_TOKEN
        const tokenDecode = decodeToken(accessToken)

        //CREATE REQUEST USER EQUALS DATA FROM DECODE
        req.user = tokenDecode

        //CONTINUE
        next()
    } catch (err) {
        //SEND RESULT ERROR
        res.status(500).json({ message: err.message });
    }
}

module.exports.authAdmin = async (req, res, next) => {
    try {
        //GET ACCESS_TOKEN FROM HEADERS
        const accessToken = req.headers.access_token

        //DECODE DATA FROM ACCESS_TOKEN
        const userAdmin = decodeToken(accessToken)

        //DESTRUCTURING ROLE FROM USERADMIN
        const { role } = userAdmin;

        //CHECK IF ROLE NOT ADMIN CANT CONTINUE AND SEND 401
        role !== 'admin'
        ? res.status(401).json({ message: 'Access forbidden' }) 
        : next()
    } catch (err) {
         //SEND RESULT ERROR
        res.status(500).json({ message: err.message })
    }
}