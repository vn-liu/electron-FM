import React, { Component } from 'react'

import axios from 'axios'

export default class HomePage extends Component {

    componentDidMount () {
        axios.get('http://i.qingting.fm/capi/neo-recommend/attrs').then((data) => {console.log(data)})
    }

    render () {
        return (
            <div>hello world</div>
        )
    }
}