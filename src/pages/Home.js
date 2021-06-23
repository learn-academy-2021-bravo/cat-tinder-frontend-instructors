import React, { Component } from 'react'
import catFriend from '../assets/cat-friend.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home-body">
        <h3>It's like Tinder but for cats.</h3>
        <p>Does your cat need a friend?</p>
        <img src={ catFriend } alt="Cat looking through the window at an adorable dog" className="cat-friend" />
      </div>
    )
  }
}
export default Home
