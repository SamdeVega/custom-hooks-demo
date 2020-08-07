import React from "react"
import { Use } from "../customHooks/useUserCollection"

export const FindUsersInjectedHook = (use: Use) => {
    const {filter, setFilter, userCollection, loadUsers} = use.useUserCollection()

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
