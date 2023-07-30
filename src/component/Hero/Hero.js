import React from "react";
import { Carousel } from "antd";

import img1 from "../../assets/slider/1.jpg";
import img2 from "../../assets/slider/2.jpg";
import img3 from "../../assets/slider/3.jpg";
import img4 from "../../assets/slider/4.jpeg";
import Image from "next/image";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Hero = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <Image src={img1} alt={img1} height={400} width={1440}></Image>
      </div>
      <div>
        <Image src={img2} alt={img1} height={400} width={1440}></Image>
      </div>
      <div>
        <Image src={img3} alt={img1} height={400} width={1440}></Image>
      </div>
      <div>
        <Image src={img4} alt={img1} height={400} width={1440}></Image>
      </div>
    </Carousel>
  );
};
export default Hero;
