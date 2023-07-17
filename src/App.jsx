import React from "react";
import Net from "./Elements/Net";
import Img from "./Elements/Img";
import Content from "./Elements/Content";
import Footer from "./Elements/Footer";

function App() {
  return (
    <>
      <Net need=" " />
      <main>
        <Img src="./image-equilibrium.jpg" alt="image equilibrium" />
        <Content
          name="Equilibrium #3429"
          text="Our Equilibrium collection promotes balance and calm"
          price={0.041}
          dateOfTheEnd="3 "
        />
        <Footer img="./image-avatar.png" name="Jules Wyvern" />
      </main>
    </>
  );
}

export default App;
