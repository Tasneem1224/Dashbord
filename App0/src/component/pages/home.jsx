import "./homeS.css";
import Gif from "../logogif.gif";

export default Home;

function Home() {
  return (
    <>
      <div className="bodyc">
        <h1>Welcome</h1>
       
        <div className="home">
          <img src={Gif} className="gif" alt="logo" />
        </div>
      </div>
    </>
  );
}
