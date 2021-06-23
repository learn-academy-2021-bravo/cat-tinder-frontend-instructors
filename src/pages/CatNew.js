import React, { Component } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      }
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  render() {
    return (
      <>
        <h2>This is the New Page</h2>
        <Form>
          <FormGroup>
            <Label for="name">Cat Name</Label>
            <Input type="text" name="name" onChange={ this.handleChange } />
          </FormGroup>
          <FormGroup>
            <Label for="age">Cat Age</Label>
            <Input type="number" name="age" onChange={ this.handleChange } />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Cat Enjoys</Label>
            <Input type="text" name="enjoys" onChange={ this.handleChange } />
          </FormGroup>
        </Form>
      </>
    )
  }
}
export default CatNew
