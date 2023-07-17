import React from "react";

function Img({ src, alt }) {
  function handleClick() {
    document.getElementById("img").classList.toggle("big");
  }

  return (
    <div id="img" className="hover" onClick={handleClick}>
      <img src={src} alt={alt} />
      <div className="overlay">
        <img src="icon-view.svg" alt="icon view" />
      </div>
      <div className="bg"></div>
    </div>
  );
}

export default Img;
