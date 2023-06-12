import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useBooking = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    // const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token')

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-server-delta.vercel.app/classes?email=${user?.email}`)
            return res.json()
        }



    })

    return [booking, refetch]

};

export default useBooking;