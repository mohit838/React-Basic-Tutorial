import React, {useState} from 'react'

export default function Hook() {

    const [myState, setMyState] = useState(0);

    const handleClick = () => {
        setMyState(myState + 1);
    }

    return (
        <div>
        <h1>This is a Hook useState</h1>

        <h1>Count: {myState}</h1>

        <button onClick={handleClick}>Increase</button>
            
        </div>
    )
}
