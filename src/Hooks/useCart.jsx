import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    //tanstack query
    const axiosSecure=useAxiosSecure()

    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts ')
            return res.data
        }
    })
    return [cart] //return as a array..so remember that destructure as a array
};

export default useCart;