import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Auth from "./page/Auth/Auth";
import Profile from "./page/Profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Activation from "./page/Activation/Activation";
import FindUserAccount from "./page/Forgot/FindUserAccount";
import ResetPassword from "./page/FindAccount/ResetPassword";
import Password from "./page/Password/Password";
import LoadingTopBar from "react-top-loading-bar";
import { useDispatch, useSelector } from "react-redux";
import { LOADER_END } from "./redux/TopLoadingBar/loaderType";
import AuthRedject from "./privateRoute/AuthRedject";

function App() {
  const loader = useSelector((state) => state.loader);
  const loaderDispatch = useDispatch();

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
        <Route
          path="/"
          element={
            <AuthRedject>
              {" "}
              <Home />
            </AuthRedject>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activation/:type" element={<Activation />} />
        <Route path="/forgot-password" element={<FindUserAccount />} />
        <Route path="/find-account" element={<ResetPassword />} />
        <Route path="/change-password" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
