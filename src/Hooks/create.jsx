import React, { useEffect, useState } from 'react';

const useCreate = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://summer-camp-server-delta.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])
    return [items, loading]
};

export default useCreate;