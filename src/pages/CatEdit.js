import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: this.props.cat ? this.props.cat.name : "",
        age: this.props.cat ? this.props.cat.age : "",
        enjoys: this.props.cat ? this.props.cat.enjoys : "",
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
    this.props.updateCat(this.state.form, this.props.cat.id)
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
            Edit Cat
          </Button>
        </Form>
        { this.state.submitted && <Redirect to={ `/catshow/${this.props.cat.id}` } /> }
      </div>
    )
  }
}
export default CatEdit
