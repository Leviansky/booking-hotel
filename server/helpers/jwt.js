const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || "HOTELSKUY";

const encodeToken = (customer) => {
    //DESTRUCTURING DATA FROM CUSTOMER
    const { id, username, email, name, address, phone, role, avatar } = customer;

    //CHANGE DATA TO JWT
    let token = jwt.sign(
      {
        id,
        username,
        email,
        avatar,
        name,
        address,
        phone,
        role
      },
      secretCode
    );

    //SEND JWT
    return token;
  };
  
  const decodeToken = (token) => {
    //COMPARE TOKEN JWT WITH SECRET CODE
    let result = jwt.verify(token, secretCode);

    //SEND RESULT COMPARE
    return result;
  };
  
  module.exports = {
    encodeToken,
    decodeToken,
  };
  