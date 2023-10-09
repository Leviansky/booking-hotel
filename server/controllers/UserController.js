const { user } = require('../models')
const { EncryptPwd, DecryptPwd } = require('../helpers/bycrypt');
const { encodeToken, decodeToken } = require('../helpers/jwt');

class UserController {

    static async login(req, res) {
        try {
            const { username, password } = req.body
            const exist = await user.findOne({
                where: {
                    username: username
                }
            })

            if (!exist) return res.sendStatus(404)

            let match = DecryptPwd(password, exist.password)
            if (!match) return res.sendStatus(400)

            const access_token = encodeToken(exist)
            localStorage.setItem(access_token)
            res.status(200).json({ access_token: access_token })

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async register(req, res) {
        try {
            const { username, password, role } = req.body
            let exist = await user.findOne({
                where: {
                    username: username
                }
            })

            if (!exist) {
                let hashPWD = EncryptPwd(password)
                let registered = await user.create({
                    username, hashPWD, role
                })

                res.status(201).json(registered)
            } else {
                res.status(400).json({ message: 'user already registered' })
            }
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

}

module.exports = UserController