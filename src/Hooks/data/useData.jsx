import React, { useEffect, useState } from 'react';

const useData = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(' https://summer-camp-server-delta.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])
    return [items, loading]
};

export default useData;