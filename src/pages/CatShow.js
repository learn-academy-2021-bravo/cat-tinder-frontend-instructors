import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    let { cat } = this.props
    return (
      <>
        <h2>This is the Show Page</h2>
        <p>{ cat.name }</p>
        <p>{ cat.age }</p>
        <p>{ cat.enjoys }</p>
      </>
    )
  }
}
export default CatShow
