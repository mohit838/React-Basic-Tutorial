import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'

 class Conditional extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        //  isLogin: true,
         isLogin: false,
      };
    };
    


    render() {

        //if false then go to Login page
        //if true then go to Home page
        
        // if (this.state.isLogin){
        //     return <Home/>
        // }
        // else{
        //     return <Login/>
        // }


        //Another way One

        // const {isLogin} = this.state;
        // let permissions;

        // if (isLogin){
        //     permissions = <Login/>
        // }
        // else{
        //     permissions = <Home/>
        // }

        // return (
        //     <div>
        //         {permissions}
        //     </div>
            
        // );


        //Another way Two {Fast Way}

        // const {isLogin} = this.state;
        // let permissions;
        // permissions = isLogin ? <Login/> : <Home/>;

        // return (
        //     <div>
        //         {permissions}
        //     </div>
            
        // );

        //Another way Three {Fastest Way Ever}

        const {isLogin} = this.state;

        return (
            <div>
                {isLogin ? <Login/> : <Home/>}
                {/* shortCircuit Way*/}
                {/* {isLogin && <Login/>} */}
            </div>
            
        );




    }
}

export default Conditional;