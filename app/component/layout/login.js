import React,{Component} from 'react'
import './login.less'
import Portal from './Portal'
import { inject, observer } from 'mobx-react'
@inject('loginStore')
@observer
export default class Login extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return [
            <div className="user-login">
                 登录
            </div>,
            <Portal>
                <div></div>
            </Portal>
        ]
    }
}
