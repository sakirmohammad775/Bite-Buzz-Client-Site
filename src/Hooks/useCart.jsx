import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useCart = () => {
    //tanstack query
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })

    return [cart] //return as a array..so remember that destructure as a array
};

export default useCart;