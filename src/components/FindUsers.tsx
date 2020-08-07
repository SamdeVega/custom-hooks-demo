import React from "react"

interface User {
    name: string
}

export const FindUsers = () => {
    const [filter, setFilter] = React.useState("")
    const [userCollection, setUserCollection] = React.useState<User[]>([])

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(response => response.json())
        .then(data => setUserCollection(data))
    }, [filter])

    return (
        <>
            <input value={filter} onChange={(event) => setFilter(event.target.value)} />
            <ul>
                {userCollection.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
