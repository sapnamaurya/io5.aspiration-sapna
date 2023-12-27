import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoPage from "./components/ToDoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoPage />
      <Footer />
    </div>
  );
}

export default App;
