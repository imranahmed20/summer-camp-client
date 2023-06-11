import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [axiosSecure] = useAxiosSecure()
    const { data: adminRole, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`)
            console.log(res.data.role)
            return res.data.role;
        }
    })
    return [adminRole, isAdminLoading]
}

export default useAdmin;