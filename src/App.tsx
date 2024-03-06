import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { NotFOund } from "./components/NotFound";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignUp />} />
        <Route path="dashboard" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFOund />} />
    </Routes>
  );
}

export default App;
