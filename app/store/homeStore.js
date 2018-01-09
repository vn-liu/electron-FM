import axios from 'axios'
import {observable, runInAction } from 'mobx'
class homeStore {

    async getAll () {
        let { data } = await axios.get('http://i.qingting.fm/capi/neo-recommend/attrs')
        console.log(data)
    }

}


export default new homeStore()