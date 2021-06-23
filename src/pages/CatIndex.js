import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    let { cats } = this.props
    return (
      <>
        <h2>This is the Index Page</h2>
        { cats && cats.map(cat => {
          return (
            <NavLink to={`/catshow/${cat.id}`} key={ cat.id }>
              <p>{ cat.name }</p>
            </NavLink>
          )
        })}
      </>
    )
  }
}
export default CatIndex
