import logo from './logo.svg';
import './App.css';
import Card from './component/Card';
import Data from './Data.json';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="App-title">My React Tutorial</h1>
        // Note: JXS means JavaScript XML
        <br/>
        //Dynamic Component Example
      </header>

      <Card titleText={Data[0].title} nameData={Data[0].Name}/>
      <Card titleText={Data[1].title} nameData={Data[1].Name}/>
      <Card titleText={Data[2].title} nameData={Data[2].Name}/>
      <Card titleText={Data[3].title} nameData={Data[3].Name}/>
      <Card titleText={Data[4].title} nameData={Data[4].Name}/>
      <Card titleText={Data[5].title} nameData={Data[5].Name}/>

    </div>
  );
}

export default App;
