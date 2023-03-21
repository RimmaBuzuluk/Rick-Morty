// import "../App.css";
import React from "react";
import arrow from "../component/arrow.png";
import ImgBlock from "../component/ImgBlock";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { MAIN_BLOCK } from "../utils/consts";

const Page = observer(() => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="buttom_back" onClick={() => navigate(MAIN_BLOCK)}>
        <img className="arrow" src={arrow} alt="My Image" />
        <div className="arrow_text">GO BACK</div>
      </div>
      <ImgBlock />
    </div>
  );
});

export default Page;
