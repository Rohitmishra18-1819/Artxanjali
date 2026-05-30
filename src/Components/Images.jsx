import ayush from "../assets/ayush.jpeg";
import baby from "../assets/baby.jpeg";
import baby1 from "../assets/baby1.jpeg";
import eys from "../assets/eys.jpeg";
import baby3 from "../assets/baby3.jpeg";
import ball from "../assets/ball.jpeg";
import ballonwala from "../assets/ballonwala.jpeg";
import birthday from "../assets/birthday.jpeg";
import birthday2 from "../assets/birthday2.jpeg";
import bluecolor from "../assets/bluecolor.jpeg";
import bmw from "../assets/bmw.jpeg";
import boy from "../assets/boy.jpeg";
import bridge from "../assets/bridge.jpeg";
import budh from "../assets/budh.jpeg";
import cake from "../assets/cake.jpeg";
import carcouple from "../assets/carcouple.jpeg";
import couple from "../assets/couple.jpeg";
import cycle from "../assets/cycle.jpeg";
import duckcouple from "../assets/duckcouple.jpeg";
import durgaji from "../assets/durgaji.jpeg";
import eye2 from "../assets/eye2.jpeg";
import eye3 from "../assets/eye3.jpeg";
import flower from "../assets/flower.jpeg";
import flower1 from "../assets/flower1.jpeg";
import flower2 from "../assets/flower2.jpeg";
import ganeshji from "../assets/ganeshji.jpeg";
import girls from "../assets/girls.jpeg";
import greeting from "../assets/greeting.jpeg";
import hair from "../assets/hair.jpeg";
import home from "../assets/home.jpeg";
import jhumka from "../assets/jhumka.jpeg";
import justlikeit from "../assets/justlikeit.jpeg";
import krishna from "../assets/krishna.jpeg";
import krishna2 from "../assets/krishna2.jpeg";
import krishna3 from "../assets/krishna3.jpeg";
import krishna4 from "../assets/krishna4.jpeg";
import lips from "../assets/lips.jpeg";
import lotus from "../assets/lotus.jpeg";
import lotus1 from "../assets/lotus1.jpeg";
import mothersday from "../assets/mothersday.jpeg";
import music from "../assets/music.jpeg";
import mzht from "../assets/mzht.jpeg";
import mzht1 from "../assets/mzht1.jpeg";
import paintging from "../assets/paintging.jpeg";
import poll from "../assets/poll.jpeg";
import sister from "../assets/sister.jpeg";
import sister2 from "../assets/sister2.jpeg";
import sky from "../assets/sky.jpeg";
import spiderman from "../assets/spiderman.jpeg";
import spiderman2 from "../assets/spiderman2.jpeg";
import teddy from "../assets/teddy.jpeg";

import "./Images.css";

const images = [
  ayush,
  baby,
  baby1,
  eys,
  baby3,
  bmw,
  ganeshji,
  birthday,
  birthday2,
  bluecolor,
  ball,
  boy,
  bridge,
  budh,
  cake,
  carcouple,
  couple,
  cycle,
  duckcouple,
  durgaji,
  eye2,
  eye3,
  flower,
  flower1,
  flower2,
  ballonwala,
  girls,
  greeting,
  hair,
  home,
  jhumka,
  justlikeit,
  krishna,
  krishna2,
  krishna3,
  krishna4,
  lips,
  lotus,
  lotus1,
  mothersday,
  music,
  mzht,
  mzht1,
  paintging,
  poll,
  sister,
  sister2,
  sky,
  spiderman,
  spiderman2,
  teddy,
];

const Images = () => {
  return (
    <div className="image-section">
      <h1>My Scratching Images</h1>

      <div className="image-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`image-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Images;