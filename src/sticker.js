import React from "react";

const Sticker = ({ url }) => {
  return (
    <div>
      <img src={url} className="bg-[#bde0fe] " alt="gifimage"></img>
    </div>
  );
};

export default Sticker;
