import React from "react"
import { useUserCollection } from "../customHooks/useUserCollection"

export const FindUsersImportedHook = () => {
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
