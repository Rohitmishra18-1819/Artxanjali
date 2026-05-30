import "./Home.css";

import bg from "../assets/artxanjalisymbol.jpeg";
import mypic from "../assets/artjill.png";

const Home = () => {
  return (
    <div
      className="home-section"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <img src={mypic} alt="Profile" className="profile-img" />

      <h2>Welcome to my Page ArtxAnjali.</h2><br></br>

      <p>
         Welcome to our world of creative scratching images, where art and
        imagination come together to create something truly unique. Explore a
        stunning collection of beautifully designed scratched-style artwork
        crafted with creativity, passion, and attention to detail.
      </p>
    </div>
  );
};

export default Home;