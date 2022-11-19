import React from "react";
import './header.css'

const Header = () => {
  return (
    <section className="mx-auto bg-black text-white h-screen">
      <div className="container lg:text-5xl pt-56 typewriter text-center">
        <h1>
          <span className="green font-bold">Equip Africa</span> | Restrategize
          2022
        </h1>
        <p className="text-xl py-10 text-center">
          Join us in for a 3-days Retreat
        </p>
        <button class="bg-transparent text-white hover:text-white-400 py-4 px-4 border border-white-500 hover:border-grey-700 rounded text-xl md:max-w-4xl">
          REGISTER FOR THE RETREAT
        </button>
      </div>
    </section>
  ); 
};

export default Header;
