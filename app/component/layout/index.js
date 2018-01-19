import React,{Component} from 'react'
import './index.less'
import Login from './login'
export default class Layout extends Component {

    render() {
        return(
            <div className="layer">
                <div className="header-nav">
                    <Login/>
                </div>
                <div className="sidebar"></div>
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
