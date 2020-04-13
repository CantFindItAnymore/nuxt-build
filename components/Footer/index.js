import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.less'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <p>SSR BY NEXT</p>
        <br />
        <p>via</p>
        <br />
        <p>ranjun(ranjunx@qq.com)</p>
      </div>
    )
  }
}
