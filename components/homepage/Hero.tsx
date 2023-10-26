import React from "react";
import "../../public/css/main.css";

const Hero:React.FC = () => {
  return (
    <section className="section__hero">
      <div className="container">
        <h2 className="heading__secondary">MONEY MINDER</h2>
        <p className="hero__description">你的記帳好夥伴！</p>
      </div>
    </section>
  );
};

export default Hero;
