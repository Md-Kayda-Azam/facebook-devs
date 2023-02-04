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
          <h3>About you</h3>
        </div>
        {!addAboutYou && (
          <IconTitle
            title={"Write some details about yourself"}
            show={setAddAboutYou}
          />
        )}
        {addAboutYou && <AddAboutYou showHide={setAddAboutYou} />}
        <div className="title">
          <h3>Name pronunciation</h3>
        </div>
        <IconTitle title={"Add a name pronunciation"} />
        <div className="title">
          <h3>Other names</h3>
        </div>
        {!addNickName && (
          <IconTitle
            title={"Add a nickname, a birth name..."}
            show={setAddNickName}
          />
        )}
        {addNickName && <AddNickName showHide={setAddNickName} />}
        <div className="title">
          <h3>Favorite quotes</h3>
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
          <h3>Blood donations</h3>
        </div>
        <IconTitle title={"Learn about blood donations"} />
      </Wraper>
    </>
  );
};

export default DetailsAboutYou;
