const { Customer, Booking  } = require("../models");
const { EncryptPwd, DecryptPwd } = require('../helpers/bycrypt');
const { encodeToken, decodeToken } = require('../helpers/jwt');


class CustomerController {
    static async getAllCustomer(req, res) {
        try {
            //GET FIND ALL CUSTOMER
            let result = await Customer.findAll({
                order: [
                    ['id', 'desc']
                ]
            });

            //SEND RESULT
            res.status(200).json(result);
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {
        try {
            //GET ID BY PARAMS
            const id = +req.params.UserId;

            //DELETE ONE CUSTOMER BY ID
            let result = await Customer.destroy({
                where: {id}
            })

            await Booking.destroy({
                where: {CustomerId: id}
            })

            //SEND RESULT SUCCESS
            result === x
            ? res.status(200).json({message: "Delete Success"})
            : res.status(404).json({message: "User not found"})
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message);
        }
    }

    static async register(req, res) {
        try {
            //GET DATA FROM REQUEST BODY
            const { username, email, password } = req.body;

            //SEARCH BY EMAIL IN DATABASE
            let founded = await Customer.findOne({
                where: { email }
            })

            //IF EMAIL NOT FOUND
            if (!founded) {
                //SEARCH BY USERNAME IN DATABASE
                founded = await Customer.findOne({
                    where: { username }
                })

                //IF USERNAME NOT FOUND
                if (!founded) {
                    //ENCRYPT PASSWORD
                    let encryptedPwd = EncryptPwd(password);

                    //CREATE ONE CUSTOMER
                    let result = await Customer.create({
                        username, email, password: encryptedPwd
                    })

                    //SEND RESULT SUCCESS
                    res.status(201).json(result);
                } else {
                    //SEND RESULT FAIL USERNAME NOT FOUND 
                    res.status(400).json({
                        message: 'Username has been registered'
                    })
                }
            } else {
                //SEND RESULT FAIL EMAIL NOT FOUND 
                res.status(400).json({
                    message: 'Email has been registered'
                })
            }
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }

    static async login(req, res) {
        try {
            //GET DATAS FROM REQUEST BODY
            const { username, password } = req.body;

            //SEARCH ONE CUSTOMER BY EMAIL
            let founded = await Customer.findOne({
                where: {
                    email: username
                }
            })

            //IF THERE'S NO ONE CUSTOMER BY EMAIL
            if (founded === null) {
                 //SEARCH ONE CUSTOMER BY USERNAME
                founded = await Customer.findOne({
                    where: {
                        username: username
                    }
                })
            }

            //SEND 404 IF THERE'S NO ONE CUSTOMER BY USERNASME AND EMAIL
            if (!founded) return res.status(404).json({
                message: 'Username/Email Not Found'
            })

            //COMPARE PASSWORD WITH DATABASE
            let match = DecryptPwd(password, founded.password)

            //SEND 401 IF PASSWORD NOT MATCH
            if(!match) return res.status(401).json({
                message: 'Wrong Password'
            })
            
            //CHANGE DATA TO JWT AND SAVE FOR ACCESS_TOKEN
            let access_token = encodeToken(founded);

            //MAKE FORMAT FOR SEND RESULT
            let result = {
                username: founded.username,
                email: founded.email,
                name: founded.name,
                avatar: founded.avatar,
                address: founded.address,
                phone: founded.phone,
                role: founded.role,
                access_token: access_token,
            }

            //SEND RESULT SUCCESS
            res.status(200).json(result);
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }

    static async edit(req,res) {
        try {
            // GET DATA REQUEST USER FROM MIDDLEWARE AUTH USER
            const {id, username, password, email, role} = req.user;

            //GET DATA FROM REQUEST BODY
            const {name, address, phone, avatar} = req.body;
            
            //UPDATE CUSTOMER WITH NEWEST DATA FROM ID
            let result = await Customer.update({
                id, username, password, email, name, address, phone, role
            }, {
                where: {id}
            })
            
            //SEND RESULT
            result[0] === 1
            ? res.status(200).json({message: "User has been updated!"})
            : res.status(400).json(result);
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }

    static async editFromAdmin(req,res) {
        try {
            // GET DATA REQUEST USER FROM MIDDLEWARE AUTH USER
            const id = +req.params.userId;

            let customer = await Customer.findOne({
                where: {id}
            })

            const { username, password, email, role } = customer

            //GET DATA FROM REQUEST BODY
            const {name, address, phone } = req.body;
            
            //UPDATE CUSTOMER WITH NEWEST DATA FROM ID
            let result = await Customer.update({
                id, username, password, email, name, address, phone, role
            }, {
                where: {id}
            })
            
            //SEND RESULT
            result[0] === 1
            ? res.status(200).json({message: "User has been updated!"})
            : res.status(400).json(result);
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }
}


module.exports = CustomerController;