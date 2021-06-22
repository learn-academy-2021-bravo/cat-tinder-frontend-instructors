import React, { Component } from 'react'
import catLogo from '../assets/cat-logo.png'

class Header extends Component {
  render() {
    return (
      <>
        <h2>This is the Header</h2>
        <img src={ catLogo } alt="cat tinder logo" className="cat-logo" />
      </>
    )
  }
}
export default Header
