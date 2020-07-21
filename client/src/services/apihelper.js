import api from './apiconfig'

export const getUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const getMeals = async (id) => {
  const response = await api.get(`/users/${id}/slots/2/meals`)
  return response.data
}

export const addMeal = async (id, mealInfo) => {
  const response = await api.post(`/users/2/slots/${id}/meals`, { meal: mealInfo })
  return response.data
}

export const getSlots = async () => {
  const response = await api.get('/users/1/slots')
  return response.data
}

export const updateMeal = async (id, mealInfo) => {
  const response = await api.put(`/users/5/slots/12/meals/${id}`, { meal: mealInfo })
  return response.data
}

export const removeMeal = async (id) => {
  const response = await api.delete(`/users/2/slots/2/meals/${id}`)
  return response.data
}