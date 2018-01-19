import { observable, runInAction, autorun } from 'mobx'
import api from '../util/api'

class loginStore {
    @observable login = false
    @observable userMessage = null
    async requestLogin () {
        let user = await api.post('http://u2.qingting.fm/u2/api/v4/user/login', {user_id: 13030026172, password: 993630,account_type:5,device_id: 'web'})
        if(user.data && !user.errorno) {
            this.userMessage = data
        }
    }
}

export default new loginStore()