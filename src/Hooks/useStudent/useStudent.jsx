import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useStudent = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isStudent, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isStudent, isInstructorLoading]
}

export default useStudent;