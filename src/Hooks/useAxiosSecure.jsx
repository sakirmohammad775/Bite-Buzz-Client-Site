import axios from "axios";

export const axiosSecure=axios.create({
    baseUrl:'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecure
}

export default useAxiosSecure;