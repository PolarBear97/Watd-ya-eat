import React, { Component } from 'react'
import { addMeal } from '../services/apihelper'
import '../App.css'

export default class Create extends Component {
  state = {
    foodeaten: '',
    slot: null
  }
  handleChange = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState = {
        [name]: value
      }
    }))
  }
  handleAdd = async (e) => {
    console.log(e.target.value)
    e.preventDefault();
    const newMeal = await addMeal(this.state.slot, { foodeaten: this.state.foodeaten })
    this.props.addNewFood(newMeal)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <div className="createmenu">
            <label class="label" htmlFor='foodeaten'>What did you eat?</label>
            <input name="foodeaten" type="text" class="button" value={this.state.foodeaten} onChange={this.handleChange} />
          </div>
          <div className="createmenu">
            <select name="slot" value={this.state.value} onChange={this.handleChange}>
              {this.props.slots && this.props.slots.map(slot => (
                <option value={slot.id}>{slot.meal_slot}</option>
              ))}
            </select>
          </div>
          <input type='submit' value='Add food' class="button" />
        </form>
      </div>
    )
  }
}