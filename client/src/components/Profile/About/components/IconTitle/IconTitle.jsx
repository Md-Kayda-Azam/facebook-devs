import React from "react";
import "./IconTitle.css";

const IconTitle = ({ title, show }) => {
  const handleShow = () => {
    show(true);
  };

  return (
    <>
      <div className="add-a-work" onClick={handleShow}>
        <div className="work-icons">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png"
            alt=""
          />
          <span>{title}</span>
        </div>
      </div>
    </>
  );
};

export default IconTitle;
