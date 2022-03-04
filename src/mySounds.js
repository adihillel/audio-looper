import B_VOC from "../src/assets/sounds/B_VOC.mp3";
import DRUMS from "../src/assets/sounds/DRUMS.mp3";
import HE_HE_VOC from "../src/assets/sounds/HE_HE_VOC.mp3";
import HIGH_VOC from "../src/assets/sounds/HIGH_VOC.mp3";
import JIBRISH from "../src/assets/sounds/JIBRISH.mp3";
import LEAD_1 from "../src/assets/sounds/LEAD_1.mp3";
import tambourine_shake_higher from "../src/assets/sounds/tambourine_shake_higher.mp3";
import UUHO_VOC from "../src/assets/sounds/UUHO_VOC.mp3";

import img1 from "../src/assets/images/image1.png";
import img2 from "../src/assets/images/image2.png";
import img3 from "../src/assets/images/image3.png";
import img4 from "../src/assets/images/image4.png";
import img5 from "../src/assets/images/image5.png";
import img6 from "../src/assets/images/image6.png";
import img7 from "../src/assets/images/image7.png";
import img8 from "../src/assets/images/image8.png";


export const sounds = [
  {
    id: 1,
    title: "B VOC",
    audio: new Audio(B_VOC),
    img: img1,
  },
  {
    id: 2,
    title: "DRUMS",
    audio: new Audio(DRUMS),
    img: img2,
  },
  {
    id: 3,
    title: "HE HE VOC",
    audio: new Audio(HE_HE_VOC),
    img: img3,
  },
  {
    id: 4,
    title: "HIGH VOC",
    audio: new Audio(HIGH_VOC),
    img: img4,
  },
  {
    id: 5,
    title: "JIBRISH",
    audio: new Audio(JIBRISH),
    img: img5,
  },
  {
    id: 6,
    title: "LEAD 1",
    audio: new Audio(LEAD_1),
    img: img6,
  },
  {
    id: 7,
    title: "TAMBOURINE",
    audio: new Audio(tambourine_shake_higher),
    img: img7,
  },
  {
    id: 8,
    title: "UUHO VOC",
    audio: new Audio(UUHO_VOC),
    img: img8,
  },
];
