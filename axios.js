import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-builder-27965.firebaseio.com/"
});
export default instance;
