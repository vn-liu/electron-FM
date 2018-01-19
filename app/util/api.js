import axios from 'axios'
import Qs from 'qs'
class api {
    constructor () {
        axios.interceptors.response.use(function (response) {
            let {data} = response.data
            if (data && response.status === 200) {return data}
        }, function (error) {
            return Promise.reject(error)
        })
    }

    get (url, params) {
        return axios.get(url, params)
    }

    post (url, params) {
        let config = {headers: {'Content-Type':'application/x-www-form-urlencoded'},transformRequest: [function (data) {
            return Qs.stringify(data);
        }]}
        return axios.post(url,params, config)
    }
}

export default new api()