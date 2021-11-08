import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My React Tutorial</h1>
        <p>/* Note: JXS means JavaScript XML */</p>
        <p>/* Dynamic Component Example */</p>
      </header>

      <Card title="This is the First Card"/>
      <Card title="This is the Second Card"/>
      <Card title="This is the Third Card"/>
      <Card title="This is the Fourth Card"/>

    </div>
  );
}

export default App;
