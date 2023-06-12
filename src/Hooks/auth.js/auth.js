

export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        role: user?.role ? user?.role : 'student'

    }
    fetch(` https://summer-camp-server-delta.vercel.app/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => { console.log(data) })
}