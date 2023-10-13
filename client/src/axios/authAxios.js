import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api";

const login = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/customers/login',
      data: data
    });
    return result.data
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: "You have entered an invalid username or password",
    });
  }
}

const register = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/customers/register',
      data: data
    });
    Swal.fire("Register", "Register Succes", "success");
    return result.data
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: "Please enter the right email!",
    });
  }
}

const getAllHotels = async (access_token) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/hotels/all',
      headers: {
        access_token: access_token 
      }
    })
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

// const getAllRooms = async () => {
//   try {
//     let result = await axios({
//       method: 'GET',
//       url: URL + '/hotels/all',
//       
//     })
//     return result.data
//   } catch (error) {
//     console.log(error.message)
//   }
// }

const getAllUsers = async (access_token) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/customers',
      headers: {
        access_token: access_token 
      }
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
}

const getAllBookings = async (access_token) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/booking/list-all',
      headers: {
        access_token: access_token
      }
    })
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

export { login, register, getAllUsers, getAllHotels, getAllBookings };
