import logo from "./logo.svg";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage userIsLoggedIn={false} userName="Vini" />
      </header>
    </div>
  );
}

export default App;
