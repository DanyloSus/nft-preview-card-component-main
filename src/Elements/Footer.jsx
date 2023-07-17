import React from "react";

function Footer({ img, name }) {
  return (
    <footer>
      <img src={img} alt={name} className="hover" />
      <p>
        Creation of <span className="artist hover">{name}</span>
      </p>
    </footer>
  );
}

export default Footer;
