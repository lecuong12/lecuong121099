import axiosClient from './axiosClient'
import * as Const from '../../constant/urlConst'

const userApi = {
    login(data) {
        const url = Const.Login;
        return axiosClient.post(url, data)
    }
}

export default userApi;