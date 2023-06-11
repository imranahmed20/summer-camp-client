import React, { useEffect, useState } from 'react';

const useInstructor = () => {
    const [instructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(' https://summer-camp-server-delta.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false)
            })
    }, [])
    return [instructors, loading]
};

export default useInstructor;