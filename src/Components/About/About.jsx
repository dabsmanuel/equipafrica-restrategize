import React from 'react'

const About = () => {
  return (
    <section
      className="container sm:px-16 px-6 py-8 mt-8 text-gray-700"
      id="about"
    >
      <div className="md:pb-0 md:mt-0">
        <div className="writeup ">
          <h1 className="uppercase font-bold text-center text-2xl pb-2 sm:font-xl lg:font-xl">
            About Equip Africa - Restrategize 2022
          </h1>
          <p className="text-justify">
            Restrategize 2022 is a 3-days Retreat organised by Equip Africa
            Community for all young entrepreneurs to connect and reflect on the
            goals they had set for the year 2022, as well as the strategies they
            used in attempting and accomplishing each goal. These young minds
            get to discover their mistakes and prepare better for the following
            year through an interactive session with seasoned experts and
            professionals. The Retreat session is divided into three themes
            specifically from Passion, Purpose and Produtivity. These core
            themes will be introduced elaborately in the following pages.
          </p>
          <div className="button-cont text-center mt-8">
            <button className="bg-slate-800 text-white hover:text-white hover:bg-black py-2 px-4 rounded text-base md:max-w-2xl border-2 font-bold">
              REGISTER HERE
            </button>
          </div>
        </div>
        {/* <div className="mt-16 lg:mt-0">
          <h2 className="font-bold text-center text-2xl pb-2 sm:font-xl lg:font-xl">
            OUR PURPOSE
          </h2>
          <p className="text-justify">
            Young Entrepreneurs are faced daily with the inner struggles of
            figuring out why they exist, what their purpose is and how to derive
            maximum fulfillment from what they either studied or are currently
            engaging in. The pressure of having their lives figured out early
            kicks in soon enough, and all through the year they manage through
            varying levels of pressures from colleagues and friends, this
            pressure now exacerbated by social media even makes finding and
            walking the path of purpose way difficult. The distractions of
            social media amongst other channels, the need for validation and the
            aspirations for recognition are posing increasing threats towards
            the stability of the young entrepreneur and business enthusiast. The
            second theme termed Purpose seeks to alleviate these problems and
            provide answers to three major questions.
          </p>
          <ol className="list-decimal px-4 pt-4">
            <li>Introducing Purpose: How do i find my purpose?</li>
            <li>A life worth living: How do I live purposefully?</li>
            <li>Focus: How do I stay aligned to my purpose?</li>
          </ol>
        </div> */}
      </div>
    </section>
  );
}

export default About