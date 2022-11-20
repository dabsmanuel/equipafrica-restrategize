import React from 'react'
import equipafrica from "../../Assets/equipafrica3.png"

const Equip = () => {
  return (
    <section className="bg-neutral-50">
      <div className="container sm:px-16 px-6 text-gray-700 py-14">
        <h1 className="font-bold text-center text-2xl lg:text-3xl sm:font-xl lg:font-xl">
          ABOUT THE HOST - EQUIP AFRICA
        </h1>
        <div className="md:mt-8 flex-wrap lg:flex gap-16 md:pb-0 md:mt-0">
          <div className="lg:pt-0 invert  grayscale flex justify-center align-center">
            <img
              src={equipafrica}
              className=" object-cover h-40 w-90"
              alt="equip"
            />
          </div>
          <div className="flex-1">
            <p className='text-justify'>
              At equip Africa, we are building a community of Changemakers
              equipped with the needed resources such as access to
              opportunities, mentorship and guidance to transform Africa. with
              Equip Africa, youth gain access to information through daily
              updates, mentorships through booking free weekly mentorship
              sessions with various African Change-leaders across various
              spheres of influence. We also provide bi-monthly Knowledge
              sessions, monthly workshops coaching calls, accountability
              partners and reading resources. Our mission is to improve the
              harnessing power of African youths through community building,
              mentorship and information.
            </p>
            <div className="button-cont text-center md:text-start mt-8">
              <a
                href="https://equipafrica.netlify.app"
                target="_blanc"
                className="bg-transparent text-grey-700 hover:text-white hover:bg-black py-2 px-4 border border-black hover:border-grey-700 rounded text-base md:max-w-2xl border-2 font-bold"
              >
                FIND OUT MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equip