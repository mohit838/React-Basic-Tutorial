import logo from './logo.svg';
import './App.css';

function App() {

  const firstName = "Mohit";
  const date = new Date();
  const dateName = date.getDate();
  const dateMonth = date.getMonth();
  const currentYear = date.getFullYear();


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My React Tutorial</h1>
      </header>

      <div className="card">
            <p>/* Note: JXS means JavaScript XML */</p>

            <div className="name">{firstName}</div>

            <div>{dateName+ "/" + dateMonth + "/" +currentYear}</div>         
      </div>
  

    


    </div>
  );
}

export default App;
