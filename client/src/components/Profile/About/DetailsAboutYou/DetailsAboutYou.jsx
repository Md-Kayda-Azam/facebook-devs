import React from "react";
import { useState } from "react";
import AddAboutYou from "../components/AddAboutYou/AddAboutYou";
import AddFavoriteQuotes from "../components/AddFavoriteQuotes/AddFavoriteQuotes";
import AddNickName from "../components/AddNickName/AddNickName";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const DetailsAboutYou = () => {
  const [addAboutYou, setAddAboutYou] = useState(false);
  const [addNickName, setAddNickName] = useState(false);
  const [addFavoriteQuotes, setAddFavoriteQuotes] = useState(false);

  return (
    <>
      <Wraper>
        <div className="title">
          <span className="bold-text">About you</span>
        </div>
        {!addAboutYou && (
          <IconTitle
            title={"Write some details about yourself"}
            show={setAddAboutYou}
          />
        )}
        {addAboutYou && <AddAboutYou showHide={setAddAboutYou} />}
        <div className="title">
          <span className="bold-text">Name pronunciation</span>
        </div>
        <IconTitle title={"Add a name pronunciation"} />
        <div className="title">
          <span className="bold-text">Other names</span>
        </div>
        {!addNickName && (
          <IconTitle
            title={"Add a nickname, a birth name..."}
            show={setAddNickName}
          />
        )}
        {addNickName && <AddNickName showHide={setAddNickName} />}
        <div className="title">
          <span className="bold-text">Favorite quotes</span>
        </div>
        {!addFavoriteQuotes && (
          <IconTitle
            title={"Add your favorite quotations"}
            show={setAddFavoriteQuotes}
          />
        )}
        {addFavoriteQuotes && (
          <AddFavoriteQuotes showHide={setAddFavoriteQuotes} />
        )}
        <div className="title">
          <span className="bold-text">Blood donations</span>
        </div>
        <IconTitle title={"Learn about blood donations"} />
      </Wraper>
    </>
  );
};

export default DetailsAboutYou;
