import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth'
export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        //do something before request is sent
        return Promise.reject(error)

    }
    )
    // intercepts 401 and 403 status (response)
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status
        // console.log('status error interceptors response ', status)
        //for 401 or 403 logout the user and move the user to the login 
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error)
    });

    return axiosSecure
}

export default useAxiosSecure;