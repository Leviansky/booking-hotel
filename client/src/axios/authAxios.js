import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api";
const access_token = localStorage.getItem("access_token")

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
      title: "Login Failed",
      text: "You have entered an invalid username or password",
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
    Swal.fire({
      icon: "success",
      title: "Register Success",
      text: "You can login with new account!",
    })
    return result.data
  } catch (error) {
    error.response.data.message === undefined
    ? Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: "Please enter the right email!",
      })
    : Swal.fire({
      icon: "error",
      title: "Register Failed",
      text: error.response.data.message,
    })
  }
}

const getAllHotels = async () => {
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

const getAllUsers = async () => {
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

const getAllBookings = async () => {
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

const editUser = async (id, data) => {
  try {
    let result = await axios({
      method: 'PUT',
      url: URL + '/customers/' + id,
      data: data,
      headers: {
        access_token: access_token
      }
    })
    getAllUsers()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const deleteUser = async (id) => {
  try {
    let result = await axios({
      method: 'DELETE',
      url: URL + '/customers/' + id,
      headers: {
        access_token: access_token
      }
    })
    getAllUsers()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

export { 
  login, 
  register, 
  getAllUsers, 
  getAllHotels, 
  getAllBookings, 
  editUser,
  deleteUser
};
