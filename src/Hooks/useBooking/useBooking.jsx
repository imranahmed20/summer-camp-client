import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const { user } = useContext(AuthContext)

    const token = localStorage.getItem('access-token')

    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/classes?email=${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
            return response.json()
        }


    })
    return [booking, refetch]

};

export default useBooking;