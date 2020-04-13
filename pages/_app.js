import App from 'next/app'
import React from 'react'

import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from '../store'

import { withRouter } from 'next/router'

import Head from 'next/head'

import whitePathList from '../assets/whitePathList.js'
import titleList from '../assets/titleList.js'

import Header from '../components/Header'
import Footer from '../components/Footer'

// 全局样式
import '../assets/app.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    {/* 通过withRouter获取this.props.router.pathname确定title，以及动态加载<Header />和<Footer /> */ }
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta name="referrer" content="no-referrer" />
          <meta charSet='utf-8' />
          <link rel="shortcut icon" href='../static/ybt.ico' />
          <title>{ titleList[this.props.router.pathname] }</title>
        </Head>
        <div className='out-wrapper'>
          {
            (whitePathList.includes(this.props.router.pathname))
              ? <Header /> : <div />
          }
          <div className='content'>
            <Component {...pageProps} />
          </div>
          {
            (whitePathList.includes(this.props.router.pathname))
              ? <Footer /> : <div />
          }
        </div>
      </Provider>
    )
  }
}

export default withRouter(withRedux(createStore)(withReduxSaga(MyApp)))
