import React from 'react';

function State2() {
  
    const [myState,setMyState] = React.useState(0); 
    
    function changeCounter(value) {
      if (value === 'increment') {
        setMyState((prevState) => prevState + 1);
      }
      else if (value === 'decrement') {
        setMyState((prevState) => prevState - 1);
      }
    }
    
    return(

        <div><h1>Counter: {myState}</h1> 

        <button className="btn" onClick={() => changeCounter('increment')}>
          +
        </button>

        <button className="btn" onClick={() => changeCounter('decrement')}>
          -
        </button>

        </div>
    );
  }

  export default State2;
 