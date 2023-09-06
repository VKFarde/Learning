import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componand/Navbar";
import TextForm from "./componand/TextForm";
import About from "./componand/About";

function App() {
  return (
    <>
      <Navbar title="Apex" id="5" />
      <div className="container my-3">
        <TextForm heading="Enter your input" />
      </div>
      <About />
    </>
  );
}

export default App;
