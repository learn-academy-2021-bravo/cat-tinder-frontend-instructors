import React, { Component } from 'react'
import notCat from '../assets/not-cat.jpg'

class NotFound extends Component {
  render() {
    return (
      <div className="notfound-body">
        <h3>Ooops, no cats here!</h3>
        <img src={ notCat } alt="little dog in a knit hat" className="cat-friend" />
      </div>
    )
  }
}
export default NotFound
