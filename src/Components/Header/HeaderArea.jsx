import React from "react";
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section
      className="mx-auto bg-gradient-to-r from-green-700 to-green-900 text-white pb-32"
      id="home"
    >
      <div className="container  pt-56 typewriter text-center">
        <h1 className="lg:text-5xl">
          <span className="green font-bold">Equip Africa</span> | Restrategize
          2022
        </h1>
        <p className="text-2xl py-10 text-center tracking-[.28rem]">
          It's Time To Retreat!!!
        </p>
        <Link
          to="/register"
          className="bg-gradient-to-r from-green-900 to-blue-400 hover:bg-gray-200 text-white hover:text-black py-2 px-4 border border-white-500 hover:border-grey-700 rounded text-base md:max-w-2xl border-2 font-semibold tracking-[.3rem]"
        >
          RESTRATEGIZE 2022
        </Link>
      </div>
    </section>
  ); 
};

export default Header;
