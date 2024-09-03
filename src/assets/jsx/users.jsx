import React from 'react';
import useFetchUsers from './useFetchUsers';

function Users() {
    const users = useFetchUsers();

    return (
        <>
            <h1>Users List</h1>
            <ul>
                {users.length > 0 ? (users.map(user => (
                    <li key={user.id} className='card'>
                        <h2>
                            {user.name}
                        </h2>
                        <p>{user.company.catchPhrase}</p>   
                    </li>
                )
                )) : <p id='loading'>Cargando...</p>}
            </ul>
        </>
    );
}

export default Users;