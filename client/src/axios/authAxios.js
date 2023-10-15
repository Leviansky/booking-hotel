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
        access_token: localStorage.getItem("access_token") 
      }
    })
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const getAllUsers = async () => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/customers',
      headers: {
        access_token: localStorage.getItem("access_token") 
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
        access_token: localStorage.getItem("access_token")
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
        access_token: localStorage.getItem("access_token")
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
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllUsers()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const approvePayment = async (id) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/booking/' + id + '/payment',
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllBookings()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const checkout = async (id) => {
  try {
    let result = await axios({
      method: 'DELETE',
      url: URL + '/booking/' + id,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllBookings()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const addRoom = async (id, data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/hotels/' + id + '/rooms',
      data: data,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllHotels()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const addHotel = async (data) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/hotels/admin',
      data: data,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

const editHotel = async (id, data) => {
  try {
    let result = await axios({
      method: 'PUT',
      url: URL + '/hotels/admin/' + id,
      data: data,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllHotels()
    return result.data
  } catch (error) {
    console.log(error.message)
  }
}

const deleteHotel = async (id) => {
  try {
    let result = await axios({
      method: 'DELETE',
      url: URL + '/hotels/admin/' + id,
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    getAllHotels()
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
  deleteUser,
  approvePayment,
  checkout,
  addRoom,
  addHotel,
  editHotel,
  deleteHotel
};
