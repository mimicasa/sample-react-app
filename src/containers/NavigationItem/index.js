import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setSetAlreadyRead, setSelectedItem } from 'actions/posts'
import './navigationItem.less'
import Moment from 'moment'

class NavigationItem extends Component {
    async onClickNavItem(id) {
        const { setSelectedItem, setSetAlreadyRead } = this.props
        await setSelectedItem(id)
        await setSetAlreadyRead(id)
    }

    render() {
        const {id, selectedItem, read, post} = this.props

    
        return <div className={`NavigationItem ${selectedItem == id ? 'NavigationItem--selected' : ''}`} onClick={::this.onClickNavItem.bind(this, id)}>
        <div className={`${post.read ? 'NavigationItem--read' : 'NavigationItem--unread'}`}>
            <div className="NavigationItem--Sender">{post.title}</div>
        </div>
        <br/>
    </div>
    }
}

NavigationItem.propTypes = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    setSelectedItem,
    setSetAlreadyRead,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem)
