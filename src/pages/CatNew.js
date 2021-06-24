import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    }
  }

  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createCat(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <div className="main-body">
        <h2>Add a New Cat</h2>
        <br />
        <Form>
          <FormGroup>
            <Label for="name" id="name">What is your cat's name?</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="age" id="age">How old is your cat?</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="enjoys" id="enjoys">What does your cat enjoy?</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <br />
          <Button name="sumbit" onClick={ this.handleSubmit }>
            Add New Cat
          </Button>
        </Form>
        { this.state.submitted && <Redirect to="/catindex" /> }
      </div>
    )
  }
}
export default CatNew
