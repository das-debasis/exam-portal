import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./components/Navbar";
import { ThoughtList } from "./components/ThoughtList";
import { Login } from "./components/Login";
import { MyWall } from "./components/MyWall";
import "./components/index.css";
import "./components/openform.css";
import "./components/login.css";
// import "./components/Quiz.css";
import "./components/Landing.css";
import "./components/mywall.css";
import "./components/StartExam.css";
import "./components/Exam.css";
import "./components/product.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import "bootstrap/dist/css/bootstrap.css";
import { Register } from "./components/Register";
import { AuthState } from "./store/AuthState";
import { ProtectRoute } from "./components/ProtectRoute";
import { StartExam } from "./components/StartExam";
import { Exam } from "./components/Exam";
import { Erep } from "./components/erep";
function App() {
  return (
    <div className="App">
      <AuthState>
        <Routes>
          <Route element={<ProtectRoute />}>
            <Route path="/openforum" element={<ThoughtList />} />
            <Route path="/mywall" element={<MyWall />} />
            <Route path="/exam" element={<StartExam />} />
            <Route path="/mainexam" element={<Exam />} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/erep" element={<Erep />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthState>
    </div>
  );
}
export default App;
