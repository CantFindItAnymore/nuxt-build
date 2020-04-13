import React, { Component } from 'react'
import Link from 'next/link'
import './index.less'

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <Link href='/'>
          <div className='logo-container'>
            <img src='https://avatars0.githubusercontent.com/u/31693925?s=40&v=4' alt='ranjun' />
          </div>
        </Link>

        <div className='header-nav-container'>
          <Link href='/login'>
            <a>登录</a>
          </Link>
          <span> | </span>
          <Link href='/register'>
            <a>注册</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
