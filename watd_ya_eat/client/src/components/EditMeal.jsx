import React, { Component } from 'react'

export default class EditMeal extends Component {
  state = {
    foodeaten: ''
  }
  componentDidMount() {
    if (this.props.mealItem) {
      this.setFormData();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mealItem !== this.props.mealItem) {
      this.setFormData();
    }
  }
  setFormData = () => {
    this.setState({
      foodeaten: this.props.mealItem.foodeaten
    })
  }
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      foodeaten: value
    })
  }
  render() {
    const { handleMealUpdate, history, id } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleMealUpdate(id, this.state);
        history.push('/meals');
      }}>
        <h3>Update Meal</h3>
        <label>
          Name:
          <input
            type='text'
            value={this.state.foodeaten}
            onChange={this.handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}