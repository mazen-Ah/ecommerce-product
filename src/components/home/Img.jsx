import React from "react";
import { clsx } from "clsx";

const Img = ({ img, active, setMainImg }) => {
  const { thumbnail, src, alt, id } = img;
  return (
    <div
      className={clsx(
        active ? "border-2 opacity-60 border-main" : "",
        `w-1/5 cursor-pointer rounded-lg `
      )}
    >
      <img
        onClick={() => {
          setMainImg(img);
        }}
        className="rounded-lg"
        src={thumbnail}
        alt={alt}
      />
    </div>
  );
};

export default Img;
