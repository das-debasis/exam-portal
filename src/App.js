import { Navbar } from "./components/Navbar";
import { Thoughts } from "./components/Thoughts";
import "./components/index.css";
import "./components/openform.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Thoughts />
    </div>
  );
}

export default App;
