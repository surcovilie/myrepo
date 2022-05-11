import React from 'react';
import {useParams} from "react-router-dom";

function UserPage() {
    let params = useParams()
    return (
        <div>
            {
                'UserId is '+ params.id
            }
        </div>
    );
}

export default UserPage;