import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Auth from "./page/Auth/Auth";
import Profile from "./page/Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./page/Auth/Activation/Activation";
import FindUserAccount from "./page/Auth/FindUserAccount/FindUserAccount";
import ResetPassword from "./page/Auth/ResetPassword/ResetPassword";
import Password from "./page/Auth/Password/Password";
import LoadingTopBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_END } from "./redux/TopLoadingBar/loaderType";
import { useEffect } from "react";
import { tokenUser } from "./redux/auth/authAction";
import Cookies from "js-cookie";
import LoginPage from "./page/Auth/LoginPage/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage/RegisterPage";
import Friends from "./page/Friends/Friends";
import AuthRedirect from "./privateRoute/AuthRedirect";
import AuthRedject from "./privateRoute/AuthRedject";
import LoggedInRoute from "./privateRoute/LoggedInRoute";
import LogOutRoute from "./privateRoute/LogOutRoute";
import MainHome from "./page/Home/MainHome";

function App() {
  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();
  const tokenDispatch = useDispatch();
  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
      tokenDispatch(tokenUser(token));
    }
  }, [tokenDispatch, token]);

  return (
    <>
      <LoadingTopBar
        color="#1876f2"
        progress={loader}
        onLoaderFinished={() => loaderDispatch({ type: LOADER_END })}
      />
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
        <Route path="/" element={<MainHome />} />
        <Route element={<LogOutRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<LoggedInRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
        </Route>
        <Route path="/activation/:type" element={<Activation />} />
        <Route path="/forgot-password" element={<FindUserAccount />} />
        <Route path="/find-account" element={<ResetPassword />} />
        <Route path="/change-password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
