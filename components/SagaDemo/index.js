import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

import { initDog, updateDog } from '../../store/actions'

import './index.less'

class SagaDemo extends Component {
  updateDog = () => {
    this.props.dispatch(updateDog())
  }

  render() {
    const { imgUrl } = this.props
    return (
      <div className='saga-demo-container'>
        <div className='img-container'>
          <img src={imgUrl} />
        </div>
        <br />
        <Button type='primary' onClick={this.updateDog}>更新dog</Button>
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch(initDog())
  }
}

const mapStateToProps = ({ imgUrl }) => ({ imgUrl })
export default connect(mapStateToProps)(SagaDemo)
