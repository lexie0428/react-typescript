import { useState, useEffect } from 'react'
import List from './List';
import UserItem from './UserItem';
import { IUser } from '../types/types';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function UsersPage() {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <List items={users} renderItem={(user: IUser) => <UserItem
                user={user}
                onClick={() => history.push(`/users/${user.id}`)}
                key={user.id} />} />
        </div>
    )
}

export default UsersPage
