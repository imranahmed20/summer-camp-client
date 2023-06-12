import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useBooking = () => {
    const { user } = useContext(AuthContext)

    const token = localStorage.getItem('access-token')

    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-delta.vercel.app/classes?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        }


    })
    return [booking, refetch]

};

export default useBooking;