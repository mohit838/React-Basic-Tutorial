import React from 'react';


class Card2 extends React.Component{
    render(){
        return( 
            <div>
                <h1>Hello World</h1>
                <h1>{this.props.name}</h1>

            </div>
        );
    }
}

//Another Way
// import React, {Component} from 'react';

// class Card2 extends Component{
//     render(){
//         return( 
//             <div>
//                 <h1>Hello World</h1>

//             </div>
//         );
//     }
// }
export default Card2;