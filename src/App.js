import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import "./components/index.css";
import "./components/openform.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ThoughtList />
    </div>
  );
}

export default App;
