import { observable, runInAction, autorun } from 'mobx'
import api from '../util/api'
class homeStore {

    @observable listId = null
    @observable listData = null
    getlist = autorun(() => {
        if (this.listId) {
            this.getListDetail(this.listId)
        }
    })

     initHome = autorun(() => {
        if(!this.listData) {
            this.getAllId()
        }
    })
    async getListDetail (queryString) {
        let data = await api.get(`http://recpage.c.qingting.fm/v2/hotpage/category/${queryString}`)
    }

    async getAllId () {
        let data = await api.get('http://i.qingting.fm/capi/neo-recommend/attrs')
        runInAction('get all listId', () => {
            this.listData = data
            this.listId = data.map((v) => { return v.id }).join('_')
        })
    }
}

export default new homeStore()