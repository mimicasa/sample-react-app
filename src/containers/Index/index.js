import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './style.less'

class Index extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


export default Index
