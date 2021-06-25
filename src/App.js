import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount(){
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({ cats: catsArray }))
    .catch(errors => console.log("Cat read fetch errors:", errors))
  }

  createCat = (newcat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat create fetch errors:", errors))
  }

  updateCat = (editcat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat update fetch errors:", errors))
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat delete fetch errors:", errors))
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> } />
          <Route path="/catshow/:id" render={ (props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={ cat } deleteCat={ this.deleteCat } />
          }} />
          <Route path="/catnew" render={ (props) => <CatNew createCat={ this.createCat } /> } />
          <Route path={"/catedit/:id"} render={ (props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit updateCat={ this.updateCat } cat={ cat } />
          }} />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App
