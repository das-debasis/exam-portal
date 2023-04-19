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
import "bootstrap/dist/css/bootstrap.css";
import { Register } from "./components/Register";
import { AuthState } from "./store/AuthState";
function App() {
  return (
    <div className="App">
      <AuthState>
        <Navbar />
        <Routes>
          <Route path="/openforum" element={<ThoughtList />} />
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthState>
    </div>
  );
}
export default App;
