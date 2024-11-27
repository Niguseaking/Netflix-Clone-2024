// import Axios from "Axios";
// const instance = Axios.create({
//     baseURL:"https:/api.themmoviedb.org/3",
// });
// export default instance
import axios from "Axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;