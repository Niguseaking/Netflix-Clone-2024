
// import axios from "Axios";
// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org/3",
// });

// export default instance;
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});

export default instance;
