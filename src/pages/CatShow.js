import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

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
          </Card>
        }
      </div>
    )
  }
}
export default CatShow
