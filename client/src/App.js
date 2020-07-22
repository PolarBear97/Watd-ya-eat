import React, { Component } from 'react'
import { getMeals, getSlots, removeMeal, updateMeal } from './services/apihelper'
import './App.css';
import Header from './components/Header.jsx'
import { loginUser, verifyUser, registerUser, removeToken } from './services/auth'
import Register from './components/Register'
import Meals from './components/Meals.jsx'
import { Link, Route, withRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Create from './components/Create'
import LogoutBtn from './components/LogoutBtn'
import EditMeal from './components/EditMeal'
import SocialMedia from './components/SocialMedia'
import Hydra from './components/Hydra'

class App extends Component {
  state = {
    meals: null,
    slots: null,
    userData: {
      username: '',
      password: ''
    },
    currentUser: null
  }
  componentDidMount = async () => {
    const currentUser = await verifyUser()
    const meals = await getMeals(currentUser.id)
    const slots = await getSlots()
    this.setState({
      meals,
      currentUser,
      slots
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
  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    removeToken();
    this.props.history.push('/')
  }
  loginSubmit = async (e) => {
    console.log("string", this.state.userData)
    const currentUser = await loginUser(this.state.userData)
    this.setState({
      currentUser
    })
  }
  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.userData)
    this.setState({
      currentUser
    })
    this.props.history.push('/')
  }
  addNewFood = (newMeal) => {
    this.setState(prevState => ({
      meals: [...prevState.meals, newMeal]
    }))
  }
  handleMealUpdate = async (id, mealInfo) => {
    const newMeal = await updateMeal(id, mealInfo);
    this.setState(prevState => ({
      meals: prevState.meals.map(meal => meal.id === parseInt(id) ? newMeal : meal)
    }))
    this.props.history.push('/')
  }
  handleMealDelete = async (id) => {
    await removeMeal(id);
    this.setState(prevState => ({
      meals: prevState.meals.filter(meal => meal.id !== id)
    }))
  }
  render() {
    return (
      <>
        <Nav />
        <LogoutBtn
          handleLogout={this.handleLogout}
        />
        <Header
          handleChange={this.handleChange}
          userData={this.state.userData}
          handleLogin={this.loginSubmit}
          currentUser={this.state.currentUser}
        />
        <div className="flex-container">
          <Route path='/register'>
            <Register
              handleChange={this.handleChange}
              userData={this.state.userData}
              handleRegister={this.handleRegister}
            />
          </Route>
        </div>
        <Route exact path='/'>
          <div id="space">
          <div class="header">Here's what you've eaten so far</div>
            {this.state.meals && this.state.meals.map(meal => (
              <div class='flex-container'>
                <Link to={`/meals/${meal.id}`}>
                  <h2>{meal.foodeaten}</h2>
                  <h3>Date: {meal.created_at}</h3>
                </Link>
                <Link to={`/meals/${meal.id}/edit`}>
                  <button class="button">Edit</button>
                </Link>
                <button class="button" onClick={() => this.handleMealDelete(meal.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div id="space"></div>
          <div id="create">
            {
              this.state.slots && <Create
                addNewFood={this.addNewFood}
                slots={this.state.slots}
              />}</div>
        </Route>
        <Route path='/meals/:id/edit' render={(props) => {
          const { id } = props.match.params;
          const mealItem = this.state.meals.find(meal => meal.id === parseInt(id));
          return <EditMeal
            {...props}
            handleMealUpdate={this.handleMealUpdate}
            mealItem={mealItem}
            id={id}
          />
        }} />
        <div id="space">
          <SocialMedia />
        </div>
        <div id="space">
          <Hydra />
        </div>
        <div id="space">
          <Footer />
        </div>
      </>
    )
  }
}

export default withRouter(App)