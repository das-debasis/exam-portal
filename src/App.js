import { Thought } from "./components/Thought";
import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import "./components/index.css";
import "./components/openform.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/openforum"
          element={
            <>
              <ThoughtList />
              <Thought />
            </>
          }
        />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
export default App;
