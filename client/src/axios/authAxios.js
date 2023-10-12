import axios from "axios";

const URL = "http://localhost:3000/api";

const login = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/customers/login',
      data: data
    });
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const register = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/customers/register',
      data: data
    });
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

export { login, register };
