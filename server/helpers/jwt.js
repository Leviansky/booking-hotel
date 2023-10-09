const jwt = require('jsonwebtoken');
const secretCode = "HOTELSKUY";

const encodeToken = (customer) => {
    const { id, username, email, name, address, phone } = customer;
    let token = jwt.sign(
      {
        id,
        username,
        email,
        name,
        address,
        phone
      },
      secretCode
    );
    return token;
  };
  
  const decodeToken = (token) => {
    let result = jwt.verify(token, secretCode);
    return result;
  };
  
  module.exports = {
    encodeToken,
    decodeToken,
  };
  