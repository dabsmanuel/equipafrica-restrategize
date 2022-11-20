import React from "react";
import './header.css'

const Header = () => {
  return (
    <section className="mx-auto bg-black text-white pb-32 ">
      <div className="container lg:text-5xl pt-56 typewriter text-center">
        <h1>
          <span className="green font-bold">Equip Africa</span> | Restrategize
          2022
        </h1>
        <p className="text-xl py-10 text-center">It's Time To Retreat!!!</p>
        <button class="bg-transparent text-white hover:text-white-400 py-2 px-4 border border-white-500 hover:border-grey-700 rounded text-base md:max-w-2xl border-2">
          REGISTER FOR RESTRATEGIZE 2022
        </button>
      </div>
    </section>
  ); 
};

export default Header;
