import React, { useContext } from "react";
import Img from "./Img";
import { Context } from "../../Context";
const Images = () => {
  const { imagesUrls } = useContext(Context);
  return (
    <div className=" flex justify-between w-full max-sm:hidden">
      {imagesUrls.map((img) => {
        return (
          <Img
            key={img.id}
            img={img}
            setMainImg={setMainImg}
            active={img.id === mainImg.id}
          />
        );
      })}
    </div>
  );
};

export default Images;
