import React, { useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Register from "../../../components/Register/Register";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [register, setRegister] = useState(false);

  return (
    <>
      <div className="fb-res">
        <div className="res-wraper">
          <Register setRegister={setRegister} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
