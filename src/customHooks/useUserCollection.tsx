import React from "react"

interface User {
    name: string
}

export interface Use {
    useUserCollection: () => {
        filter: string;
        setFilter: React.Dispatch<React.SetStateAction<string>>;
        userCollection: User[];
        loadUsers: () => void;
    }
}

export const useUserCollectionMock = () => {
    const [filter, setFilter] = React.useState("")
    const [userCollection, setUserCollection] = React.useState<User[]>([])

    const loadUsers = () => {
        setUserCollection([
            {name: 'Dave Thomas'},
            {name: 'Kent Beck'},
            {name: 'Martin Fowler'},
            {name: 'Robert C. Martin'},
            {name: 'Ron Jeffries'},
            {name: 'Tim Ottinger'},
            {name: 'Ward Cunningham'},
        ].filter(({name}) => name.toLowerCase().includes(filter)))
    }

    return {filter, setFilter, userCollection, loadUsers}
}

export const useUserCollection = () => {
    const [filter, setFilter] = React.useState("")
    const [userCollection, setUserCollection] = React.useState<User[]>([])

    const loadUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
        .then(response => response.json())
        .then(data => setUserCollection(data))
    }

    return {filter, setFilter, userCollection, loadUsers}
}
