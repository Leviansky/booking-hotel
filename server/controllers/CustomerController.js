const { Customer } = require("../models");
const { EncryptPwd, DecryptPwd } = require('../helpers/bycrypt');
const { encodeToken, decodeToken } = require('../helpers/jwt');


class CustomerController {
    static async getAllCustomer(req, res) {
        try {
            let result = await Customer.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deleteUser(req,res) {
        try {
            const id = +req.params.UserId;
            let result = await Customer.destroy({
                where: {id}
            })
            result === 1
            ? res.status(200).json({message: "Delete Success"})
            : res.status(404).json({message: "User not found"})
        } catch (error) {
            res.status(500).json(error.message);
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
            res.status(500).json(error.message)
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

            if (!founded) return res.status(404).json({
                message: 'Username/Email Not Found'
            })

            let match = DecryptPwd(password, founded.password)
            if(!match) return res.status(401).json({
                message: 'Wrong Password'
            })

            let access_token = encodeToken(founded);
            res.status(200).json({ access_token });
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async edit(req,res) {
        try {
            let user = decodeToken(req.headers.access_token);
            const {id, username, password, email, role} = user;
            const {name, address, phone} = req.body;

            let result = await Customer.update({
                id, username, password, email, name, address, phone, role
            }, {
                where: {id}
            })
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}


module.exports = CustomerController;