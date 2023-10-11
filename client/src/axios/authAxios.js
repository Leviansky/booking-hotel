import axios from "axios";

const URL = "http://localhost:3000/api/";

// const getUsers = async () => {
//   try {
//     let result = await axios({
//       method: "GET",
//       url: URL + "/login",
//     });
//     console.log(result.data)
//   } catch (error) {
//     console.log(error);
//   }
// };
const login = (data, cb) => {
  axios({
    method: "GET",
    url: `${URL}/customers/login`,
    data,
  })
    .then((result) => {
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { login };
