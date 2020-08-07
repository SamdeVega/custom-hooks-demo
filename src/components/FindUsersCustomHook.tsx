import React from "react"

interface User {
    name: string
}

const useUserCollection = () => {
    const [filter, setFilter] = React.useState("")
    const [userCollection, setUserCollection] = React.useState<User[]>([])

    const loadUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(response => response.json())
        .then(data => setUserCollection(data))
    }

    return {filter, setFilter, userCollection, loadUsers}
}

export const FindUsersCustomHook = () => {
    const {filter, setFilter, userCollection, loadUsers} = useUserCollection()

    React.useEffect(() => {
        loadUsers()
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
