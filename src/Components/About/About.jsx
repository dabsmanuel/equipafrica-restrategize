import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <section className=" bg-slate-50 mb-2 pb-10" id="about">
      <div className="md:pb-0 md:mt-0 container sm:px-16 px-6 py-16 text-gray-500">
        <div className="writeup ">
          <h1 className="uppercase font-bold text-center text-2xl pb-2 sm:font-xl lg:font-xl">
            About Restrategize 2022
          </h1>
          <p className="text-justify">
            The hard economic reality of our time has made it urgent to for
            business owners and job seekers to reevaluate their growth methods.
            In the midst of this harsh economic reality, there are people
            through Discovery and Access, achieved mind blowing results,
            creating ever increasing cash flow while also impacting their
            communities at large.
          </p>
          <p>
            Restrategize summit aims to reveal the secret to productivity in
            your business and career through its engaging sessions with seasoned
            professionals.
          </p>
          <p>
            Are you willing to put yourself in a position to get more
            outstanding achievements for your business and career?
          </p>
          <p>If you said YES!</p>
          <p>Then hurry and and register for RESTRATEGIZE summit now!</p>
          <div className="button-cont text-center mt-8">
            <Link
              to="/register"
              className="bg-gradient-to-r from-green-900 to-blue-400 hover:bg-gray-200 text-white hover:text-black py-2 px-4 border border-white-500 hover:border-grey-700 rounded text-base md:max-w-2xl border-2 font-semibold tracking-[.3rem]"
            >
              REGISTER HERE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About