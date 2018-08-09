import React, { Component, PropTypes } from 'react'

import './content.less'

const Content = ({selectedPost}) => {

if (!selectedPost) {
    return <div className="content content__body">Please select a post</div>
}
 return <div className="content content__body">{selectedPost.body}</div>
}

Content.propTypes = {
}

export default Content