import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import SideBar from "./components/SideBar/SideBar";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import VerifyAccount from './pages/VerifyAccount/VerifyAccount';

function App() {
  return (
    <BrowserRouter basename="/touchcard">
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={ <SignUp />}></Route>
          <Route path="/verify" element={ <VerifyAccount />}></Route>
        </Routes>
      </SideBar>
  </BrowserRouter>
  );
}

export default App;
