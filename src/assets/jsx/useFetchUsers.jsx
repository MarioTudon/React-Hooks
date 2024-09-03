import { useEffect, useState } from 'react';

function useFetchUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('API requested failed');
                }

                const data = await response.json();
                setUsers(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    return users;
}

export default useFetchUsers;