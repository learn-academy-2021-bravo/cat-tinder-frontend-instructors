import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'

class CatIndex extends Component {
  render() {
    let { cats } = this.props
    return (
      <div className="main-body">
        <h2>Meet the Cats!</h2>
        <div className="index-cards">
          { cats && cats.map(cat => {
            return (
              <Row key={ cat.id }>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Hi, my name is { cat.name }</CardTitle>
                    <h2>🐈‍⬛</h2>
                    <NavLink to={`/catshow/${cat.id}`}><Button>More Info Here</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
export default CatIndex
