import React, { Component } from 'react'
import axios from 'axios'
import { inject, observer } from 'mobx-react'

@inject('homeStore')
@observer
export default class HomePage extends Component {

    componentDidMount () {

    }

    render () {
        return (
            <div>hello world</div>
        )
    }
}