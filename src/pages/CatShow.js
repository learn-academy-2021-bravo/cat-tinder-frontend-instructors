import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return (
      <div className="main-body">
        { cat &&
            <Card body className="card-show">
              <CardTitle tag="h5">Hi, my name is { cat.name }</CardTitle>
              <CardText>I am { cat.age }</CardText>
              <CardText>I enjoy { cat.enjoys }.</CardText>
              <NavLink to={`/catedit/${cat.id}`}>
                <Button>Edit Cat Profile</Button>
              </NavLink>
              <br />
              <NavLink to="/catindex">
                <Button>Delete Cat Profile</Button>
              </NavLink>
            </Card>
        }
      </div>
    )
  }
}
export default CatShow
