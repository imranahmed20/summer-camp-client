import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useBooking = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token')

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/classes?email=${user?.email}`)
            return response.data;
        }


    })
    return [booking, refetch]

};

export default useBooking;