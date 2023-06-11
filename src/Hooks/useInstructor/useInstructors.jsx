import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useInstructors = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructors;