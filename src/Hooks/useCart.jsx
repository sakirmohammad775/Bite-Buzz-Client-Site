import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";



const useCart = () => {
    //tanstack query
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?.email${user.email}`)
            console.log(res.data)
            return res.data
        }
    })

    return [cart,refetch] //return as a array..so remember that destructure as a array
};

export default useCart;