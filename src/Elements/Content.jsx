import React from "react";

function Content({ name, text, price, dateOfTheEnd }) {
  return (
    <section>
      <h1 className="hover">{name}</h1>
      <p>{text}</p>
      <div>
        <p className="price">
          <img src="./icon-ethereum.svg" />
          {price}ETH
        </p>
        <p className="date">
          <img src="./icon-clock.svg" />
          {dateOfTheEnd}
          days left
        </p>
      </div>
    </section>
  );
}

export default Content;
