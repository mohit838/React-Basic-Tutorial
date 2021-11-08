// import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Data from './Data.json';
import Card2 from './component/Card2';
import State from './component/State';
import State2 from './component/State2';
import Conditional from './component/condition/Index';
import Event from './component/event/index';
import Binding from './component/binding';
import Hook from './component/hooks/Hook';


function App() {

  //let list = [];

  // for(let i=0; i < Data.length; i++){
  //   list.push(<Card titleText={Data[i].title} nameData={Data[i].Name}/>);
  // }


  //Mapping is very easy ways to show data
  // list = Data.map((list) => <Card titleText={list.title} nameData={list.Name}/>);

  return (
          <div className="App">
            <header className="header">
              <h1 className="App-title">My React Tutorial</h1>
              {/* // Note: JXS means JavaScript XML */}
              <br/>
              {/* //Dynamic Component Example */}
            </header>

            {/* <Card titleText={Data[0].title} nameData={Data[0].Name}/>
            <Card titleText={Data[1].title} nameData={Data[1].Name}/>
            <Card titleText={Data[2].title} nameData={Data[2].Name}/>
            <Card titleText={Data[3].title} nameData={Data[3].Name}/>
            <Card titleText={Data[4].title} nameData={Data[4].Name}/>
            <Card titleText={Data[5].title} nameData={Data[5].Name}/> */}


            {/* This is the another efficient way */}
            {/* {list} */}

            {/* Super-fast way to show data */}
            {Data.map((list, index) => <Card key={index} titleText={list.title} nameData={list.Name}/>)};
            
            <hr/>
            <h1>Class Usages practice</h1>
            <hr/>
            <Card2 name="First"/>

            {/* props is readonly parameter */}

            <hr/>
            <State/>
            <hr/>
            <div className="gap"></div>

            <h1>Another Way to Count</h1>
            <State2/>
            <hr/>
            <div className="gap"></div>
            


            {/* <Conditional></Conditional> */}
            <Conditional/>


            <hr/>
            <div className="gap"></div>


            <Event/>


            <hr/>
            <div className="gap"></div>

            <Binding/>

            <hr/>
            <div className="gap"></div>

            <Hook/>

            <hr/>
            <div className="gap"></div>
          </div>
  );
}

export default App;
