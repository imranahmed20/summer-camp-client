import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClass = () => {
    const { data: menu = [], isLoading: loading } = useQuery({
        queryKey: ["instructor"],
        queryFn: async () => {
            const res = await fetch('https://summer-camp-server-delta.vercel.app/instructor')
            return res.json()
        }
    })
    return [menu, loading]

};

export default useClass;