import axios from 'axios'

export default axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
})
