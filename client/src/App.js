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
import ProfileHeader from "./components/Profile/ProfilePost/ProfileHeader/ProfileHeader";
import About from "./components/Profile/About/About";
import Followers from "./components/Profile/Follwers/Followers";
import Photos from "./components/Profile/Photos/Photos";
import Groups from "./components/Profile/Groups/Groups";
import Videos from "./components/Profile/Videos/Videos";
import More from "./components/Profile/More/More";
import Posts from "./components/Profile/Posts/Posts";
import OverView from "./components/Profile/About/OverView/OverView";
import WorkAndEducation from "./components/Profile/About/WorkAndEducation/WorkAndEducation";
import PlacesLived from "./components/Profile/About/PlacesLived/PlacesLived";
import ContactAndBasicInfo from "./components/Profile/About/ContactAndBasicInfo/ContactAndBasicInfo";
import PrivacyAndLegalInfo from "./components/Profile/About/PrivacyAndLegalInfo/PrivacyAndLegalInfo";
import ProfileTransparency from "./components/Profile/About/ProfileTransparency/ProfileTransparency";
import FamilyAndRelationship from "./components/Profile/About/FamilyAndRelationship/FamilyAndRelationship";
import DetailsAboutYou from "./components/Profile/About/DetailsAboutYou/DetailsAboutYou";
import LifeEvents from "./components/Profile/About/LifeEvents/LifeEvents";
import FriendsMenu from "./components/FriendsComponents/FriendsMenu/FriendsMenu";
import FriendRequests from "./components/FriendsComponents/FriendRequests/FriendRequests";
import Suggections from "./components/FriendsComponents/Suggections/Suggections";
import AllFriends from "./components/FriendsComponents/AllFriends/AllFriends";

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
          <Route path="/:username" element={<Profile />}>
            <Route path="/:username" element={<Posts />} />
            <Route path="about_" element={<About />}>
              <Route index element={<OverView />} />
              <Route path="work_and_education" element={<WorkAndEducation />} />
              <Route path="places" element={<PlacesLived />} />
              <Route
                path="contact_and_basic_info"
                element={<ContactAndBasicInfo />}
              />
              <Route
                path="privacy_and_legal_info"
                element={<PrivacyAndLegalInfo />}
              />
              <Route
                path="profile_transparency"
                element={<ProfileTransparency />}
              />
              <Route
                path="family_and_relationships"
                element={<FamilyAndRelationship />}
              />
              <Route path="details" element={<DetailsAboutYou />} />
              <Route path="life_events" element={<LifeEvents />} />
            </Route>
            <Route path="followers" element={<Followers />} />
            <Route path="photos" element={<Photos />} />
            <Route path="videos" element={<Groups />} />
            <Route path="groups" element={<Videos />} />
            <Route path="more" element={<More />} />
          </Route>
          <Route path="/friends" element={<Friends />}>
            <Route path="" element={<FriendsMenu />} />
            <Route path="requests" element={<FriendRequests />} />
            <Route path="suggections" element={<Suggections />} />
            <Route path="list" element={<AllFriends />} />
          </Route>
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
