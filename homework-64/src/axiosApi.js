import axios from 'axios';

const axiosApi = axios.create({
  baseURL:'https://project-64-c25c8.firebaseio.com/'
});
export default axiosApi;