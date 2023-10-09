const { Customer } = require("../models");
const { EncryptPwd, DecryptPwd } = require('../helpers/bycrypt');
const { encodeToken, decodeToken } = require('../helpers/jwt');


class CustomerController {
    static async getAllCustomer(req, res) {
        try {
            let result = await Customer.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async register(req, res) {
        try {
            const { username, email, password } = req.body;
            let founded = await Customer.findOne({
                where: { email }
            })
            if (!founded) {
                founded = await Customer.findOne({
                    where: { username }
                })
                if (!founded) {
                    let encryptedPwd = EncryptPwd(password);
                    let result = await Customer.create({
                        username, email, password: encryptedPwd
                    })
                    res.status(201).json(result);
                } else {
                    res.status(400).json({
                        message: 'Username has been registered'
                    })
                }
            } else {
                res.status(400).json({
                    message: 'Email has been registered'
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;

            let founded = await Customer.findOne({
                where: {
                    email: username
                }
            })

            if (founded === null) {
                founded = await Customer.findOne({
                    where: {
                        username: username
                    }
                })
            }

            if (founded) {
                if (DecryptPwd(password, founded.password)) {
                    let access_token = encodeToken(founded);
                    localStorage.setItem(access_token);
                    res.status(200).json({ access_token });
                } else {
                    res.status(401).json({
                        message: 'Wrong Password'
                    })
                }
            } else {
                res.status(404).json({
                    message: 'Username/Email Not Found'
                })
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}


module.exports = CustomerController;