import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Auth from "./page/Auth/Auth";
import Profile from "./page/Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./page/Activation/Activation";
import Forgot from "./page/Forgot/Forgot";
import FindAccount from "./page/FindAccount/FindAccount";
import Password from "./page/Password/Password";

function App() {
  return (
    <>
      <ToastContainer
        style={{ zIndex: 9999999 }}
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activation" element={<Activation />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/find-account" element={<FindAccount />} />
        <Route path="/change-password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
