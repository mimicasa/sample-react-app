import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getPosts } from 'actions/posts'
import NavigationItem from 'containers/NavigationItem'
import Content from 'components/Content'

import './app.less'

class App extends Component {

  async componentDidMount() {
    const { getPosts } = this.props
    await getPosts()
  }

  render() {
    const { posts, selectedPost, selectedItem } = this.props
   
    if (!posts) {
      return <div>loading...</div>
    }


    let navContent = Object.keys(posts).map((key, i) => {
        if(posts[key]) return <NavigationItem key={i} selectedItem={selectedItem} selectedPost id={key} post={posts[key]} />
    })
   
    return (
      <div>
        <div className="Body">
          <div className="Body__Navigation">
            { navContent }
          </div>

          <div className="Body__Content"><Content selectedPost={selectedPost}/></div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
}

const mapStateToProps = (state, ownProps) => {
  const posts = state.entities ? state.entities.posts : null
  const selectedItem = state.entities.selectedItem
  const selectedPost = posts ? posts[selectedItem] : null

  return {
    posts,
    selectedPost,
    selectedItem,
  }
}

const mapDispatchToProps = {
  getPosts,
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
