import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return (
      <>
        <h2>This is the Show Page</h2>
        { cat &&
          <>
            <p>{ cat.name }</p>
            <p>{ cat.age }</p>
            <p>{ cat.enjoys }</p>
          </>
        }
      </>
    )
  }
}
export default CatShow
