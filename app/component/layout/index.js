import React,{Component} from 'react'
import './index.less'
export default class Layout extends Component {

    render() {
        return(
            <div className="header-nav">
               <div> this is nav</div>
                {this.props.children}
            </div>
        )
    }
}
