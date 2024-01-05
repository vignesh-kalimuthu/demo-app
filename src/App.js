import Login from "./components/login";
import Registration from "./components/registration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
     
    </div>
  );
}

export default App;
