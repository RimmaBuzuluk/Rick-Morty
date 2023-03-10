import myImage from "./1.png";
import "../App.css";

function Img() {
  return (
    <div className="img">
      <img className="img-rick" src={myImage} alt="My Image" />
    </div>
  );
}

export default Img;
