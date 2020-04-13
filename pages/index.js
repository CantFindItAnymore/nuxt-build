import React from 'react'
import { connect } from 'react-redux'

import SagaDemo from '../components/SagaDemo'

class Index extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <SagaDemo />
      </div>
    )
  }
}

export default connect()(Index) // connect会将dispatch方法传到props中
