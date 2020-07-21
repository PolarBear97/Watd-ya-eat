import React, { Component } from 'react'
import { getMeals, addMeal } from '../services/apihelper'
import {withRouter} from 'react-router-dom'

export default class Meals extends Component {
  state = {
    meals: null,
    addMeal: false,
    meal: {
      foodEaten: '',
      user_id: null,
      slot_id: null
    }
  }
  componentDidMount = async () => {
    const id = this.props.match.params.id
    const meals = await getMeals(id)
    this.setState({
      meals
    })
  }
  toggleAdd = () => {
    this.setState(prevState => ({
      addMeal: !prevState.addMeal
    }))
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      meal: {
        ...prevState.meal,
        [name]: value
      }
    }))
  }
  handleAdd = async (e) => {
    e.preventDefault();
    const newMeal = await addMeal(this.props.match.params.id, this.state.meal)
    this.setState(prevState => ({
      meals: [...prevState.meals, newMeal]
    }))
  }
  render() {
    return (
      <>

      </>
    )
  }
}