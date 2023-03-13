import "../App.css";
import Search from "./Serch";
import Img_Serch from "./Vector.png";

function Block_info() {
  return (
    <div className="block_info">
      <img className="img-search" src={Img_Serch} alt="My Image" />
      <Search />
    </div>
  );
}

export default Block_info;
