import React, { Component } from 'react'
import { getMeals, getUsers } from './services/apihelper'
import Header from './components/Header.jsx'
import { loginUser } from './services/auth'

export default class App extends Component {
  state = {
    meals: null,
    userData: {
      username: '',
      password: ''
    },
    currentUser: null
  }
  componentDidMount = async () => {
    const meals = await getUsers()
    this.setState({
      meals
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [name]: value
      }
    }))
  }
  loginSubmit = async (e) => {
    e.preventDefault()
    const currentUser = await loginUser(this.state.userData)
    this.setState({
      currentUser
    })
  }


  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.loginSubmit}
        />
        {this.state.meals && this.state.meals.map(meal => (
          <div className='meal'>
            <h2>{meal.foodeaten}</h2>
            <h3>Date: {meal.created_at}</h3>
          </div>
        ))}
      </div>
    )
  }
}
