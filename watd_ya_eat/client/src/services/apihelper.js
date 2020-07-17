import api from './apiconfig'

export const getUsers = async () => {
  const response = await api.get('/users/2/slots/2/meals')
  return response.data
}

export const getMeals = async () => {
  const response = await api.get('/users')
  return response.data
}