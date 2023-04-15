import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import { Login } from "./components/Login";
import "./components/index.css";
import "./components/openform.css";
import "./components/login.css";
import "./components/Landing.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/openforum" element={<ThoughtList />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
