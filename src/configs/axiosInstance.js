import axios from "axios";

const accessToken =  localStorage.getItem('access_token')

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    ...(accessToken ? {
      'Authorization': `Bearer ${accessToken}`
    } : {})
  }
})

export const handleHeaders = (token) => {
  localStorage.setItem('access_token', token)
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance