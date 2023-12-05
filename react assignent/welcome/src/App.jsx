import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Login from "./Page/Login/index.jsx";
function App() {
  return (
    <div className="main.App">
      <Header />
      <div className="App">
        <Main />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
