import React from 'react'

const Post = (props) => (
  <div>
    <h3>{props.title} </h3>
    <p> {props.selftext} </p>
    <p> {props.url} </p>
  </div>
)

export default Post
