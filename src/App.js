import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import { Login } from "./components/Login";
import { MyWall } from "./components/MyWall";
import "./components/index.css";
import "./components/openform.css";
import "./components/login.css";
import "./components/Landing.css";
import "./components/mywall.css";
import "./components/StartExam.css";
import "./components/Exam.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import "bootstrap/dist/css/bootstrap.css";
import { Register } from "./components/Register";
import { AuthState } from "./store/AuthState";
import { ProtectRoute } from "./components/ProtectRoute";
import { StartExam } from "./components/StartExam";
import { Exam } from "./components/Exam";
function App() {
  return (
    <div className="App">
      <AuthState>
        <Navbar />
        <Routes>
          <Route element={<ProtectRoute />}>
            <Route path="/openforum" element={<ThoughtList />} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/mainexam" element={<Exam />} />
          <Route path="/register" element={<Register />} />
          <Route path="/exam" element={<StartExam />} />
          <Route path="/exam" element={<StartExam />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mywall" element={<MyWall />} />
        </Routes>
      </AuthState>
    </div>
  );
}
export default App;
