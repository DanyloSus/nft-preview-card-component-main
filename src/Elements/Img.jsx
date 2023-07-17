import React from "react";

function Img({ src, alt }) {
  function handleClick() {
    document.getElementById("img").classList.toggle("big");
  }

  return (
    <div id="img" className="hover" onClick={handleClick}>
      <img src={src} alt={alt} />
      <div>
        <img src="icon-view.svg" alt="icon view" />
      </div>
    </div>
  );
}

export default Img;
