import axios from 'axios';
const axiosApi = axios.create({
    baseURL: 'https://project-65-e562f.firebaseio.com/'
});
export default axiosApi;
