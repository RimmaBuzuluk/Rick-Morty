// import "../App.css";
import React from "react";
import arrow from "../component/arrow.png";
import ImgBlock from "../component/ImgBlock";
import { observer } from "mobx-react-lite";


const Page = observer(() => {
  return (
    <div>
      <div className="buttom_back" >
        <img className="arrow" src={arrow} alt="My Image" />
        <div className="arrow_text">GO BACK</div>
      </div>
      <ImgBlock />
    </div>
  );
});

export default Page;
