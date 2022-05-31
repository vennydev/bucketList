import React from "react";
import { useHistory } from "react-router-dom";


const NotFound = () => {
    let history = useHistory();
    return (
        <div>
            <h1>주소가 올바르지 않아요!</h1>
                <button onClick={() => 
                    history.push('/')
                }>Go to home</button>
        </div>
        
    )
}

export default NotFound;