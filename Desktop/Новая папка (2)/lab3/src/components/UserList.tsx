import React from 'react';
import {Link, Outlet} from "react-router-dom";
interface User{
    id:number,
    name:string
}
interface UserList{
    users:User[]
}
const data: UserList = {
    users: [
        {
            id : 1, name : 'Ilia'
        },
        {
            id : 2, name : 'Ilia'
        },
        {
            id : 3, name : 'Ilia'
        },
    ]
}

function UserList() {
    return (
        <div>
            {
                data.users.map(x =>(
                    <div key={x.id}>
                        <Link to={`/home/${x.id}`}>{x.name}</Link>
                    </div>
                ))
            }
            <Outlet />
        </div>
    );
}

export default UserList;