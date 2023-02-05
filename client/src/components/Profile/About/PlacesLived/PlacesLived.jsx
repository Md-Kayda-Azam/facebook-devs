import React from "react";
import { useState } from "react";
import AddCity from "../components/AddCity/AddCity";
import AddCurrentCity from "../components/AddCurrentCity/AddCurrentCity";
import Addhometown from "../components/Addhometown/Addhometown";
import IconTitle from "../components/IconTitle/IconTitle";
import Wraper from "../components/Wraper/Wraper";

const PlacesLived = () => {
  const [addCureentCity, setAddCurrentCity] = useState(false);
  const [addHomeTown, setAddHomeTown] = useState(false);
  const [addCity, setAddCity] = useState(false);

  return (
    <>
      <Wraper>
        <div className="title">
          <span className="bold-text">Places lived</span>
        </div>
        {!addCureentCity && (
          <IconTitle title={"Add current city"} show={setAddCurrentCity} />
        )}
        {addCureentCity && <AddCurrentCity showHide={setAddCurrentCity} />}
        {!addHomeTown && (
          <IconTitle title={"Add hometown"} show={setAddHomeTown} />
        )}
        {addHomeTown && <Addhometown showHide={setAddHomeTown} />}

        {!addCity && <IconTitle title={"Add city"} show={setAddCity} />}
        {addCity && <AddCity showHide={setAddCity} />}
      </Wraper>
    </>
  );
};

export default PlacesLived;
