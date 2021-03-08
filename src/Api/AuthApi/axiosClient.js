import axios from 'axios';
import * as Fc from '../../utils/Function'
import * as Const from '../../constant/urlConst';

const token = Fc.getTokenUserLogin();
const auth = token ? `bearer ${token}` : ''

const axiosClient = axios.create({
    baseURL: Const.Domain,
    headers: {
        'Content-Type': 'application/json',
        Authorization: auth
    }
})

// interceptors
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
});

export default axiosClient;