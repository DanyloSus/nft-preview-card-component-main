import React from "react";

function Footer({ img, name }) {
  return (
    <footer>
      <img src={img} alt={name} />
      <p>
        Creation of <span className="artist hover">{name}</span>
      </p>
    </footer>
  );
}

export default Footer;
