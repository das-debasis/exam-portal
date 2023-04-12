import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import "./components/index.css";
import "./components/openform.css";
import "./components/Landing";
import "./components/Landing.css";
import { Landing } from "./components/Landing";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ThoughtList /> */}
      <Landing />
    </div>
  );
}

export default App;
