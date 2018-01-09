import axios from 'axios'

class api {
    constructor () {
        axios.interceptors.response.use(function (response) {
           let { data } = response.data
            if(data && response.status === 200) {return data}
        }, function (error) {
            return Promise.reject(error)
        })

    }

    get (url, params) {
        return axios.get(url, params)
    }
}


export default new api()