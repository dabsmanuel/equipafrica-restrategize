import img1 from "../../Assets/speaker1.jpg";
import {Link} from "react-router-dom";


const Speaker = () => {
  return (
    <section className=" bg-gradient-to-r from-green-700 to-green-900">
      <div className=" container lg:px-16 px-6 py-16">
        <div className="pb-12">
          <h3 className="text-gray-100 text-center font-semibold tracking-[.3rem]">
            YOU COULDN'T GET IN MORE BETTER HANDS
          </h3>
          <h1 className="text-gray-100 text-base font-semibold uppercase text-4xl text-center pt-6 tracking-[.9rem]">
            The Speaker
          </h1>
        </div>
        <div className="">
          <div className="container rounded">
            <img
              className=" rounded object-fill"
              src={img1}
              alt="Sunset in the mountains"
            />
            <div className="py-4 bg-slate-400 text-center">
              <p className="font-bold text-xl text-gray-800 uppercase pb-4">
                Ijeoma Ejimadu
              </p>
              <Link
                to="/speaker"
                className=" button bg-gradient-to-r from-green-900 to-blue-400 hover:bg-gray-200 text-white hover:text-black py-2 px-4 hover:border-gray-700 rounded text-center md:max-w-2xl border font-semibold"
              >
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
