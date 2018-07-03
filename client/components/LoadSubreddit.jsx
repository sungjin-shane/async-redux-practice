import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newSubreddit: ''
    }

    this.updateSubreddit = this.updateSubreddit.bind(this)
    this.callDispatch = this.callDispatch.bind(this)
  }

  updateSubreddit (event) {
    console.log(event.target.value)
    this.setState({
      newSubreddit: event.target.value
    })
  }

  callDispatch (event) {
    console.log(this.state.newSubreddit)
    this.props.dispatch(fetchPosts(this.state.newSubreddit))
    // this.props.dispatch(fetchPosts('newzealand'))
  }

  render () {
    return (
      <div>
        <input type="text" name="newSubreddit" onChange={this.updateSubreddit}/>
        <button onClick={this.callDispatch}>Fetch Posts
        </button>
      </div>
    )
  }

// const LoadSubreddit = ({dispatch}) => (
//   <div>
//     <input type="text" name="newSubreddit" onChange={() => dispatch(fetchPosts('newzealand'))}/>
//     <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//     Fetch Posts
//     </button>
//   </div>
// )
}

export default connect()(LoadSubreddit)
