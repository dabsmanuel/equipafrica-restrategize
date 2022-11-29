import  { useRef } from "react";
import countryData from "../countryData";
import congratulations from "../Assets/pngwing.com.png";
import emailjs from "@emailjs/browser";


const Apply = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1huud69",
      "template_rh8z9yo",
      form.current,
      "jymc7E4wWndMBhd6b"
    );

    e.target.reset();
  };

  return (
    <div className=" block lg:flex justify-center items-center space-x-5 md:mt-0 pt-32 pb-16 bg-gradient-to-r from-green-700 to-green-900">
      <div className="text-white text-center">
        <img src={congratulations} alt="congrats" className="w-96 mx-auto" />
        <h1 className="text-xl lg:text-3xl font-bold">
          You have made the right choice!
        </h1>
        <p className="text-xl font-bold py-4">
          Kindly fill the form and be ready to RESTRATEGIZE!!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="">
        <div className="overflow-hidden shadow rounded-md w-96 max-auto">
          <div className="bg-gradient-to-r from-green-500 to-green-700 px-4 py-5 sm:p-6">
            <div>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="last name"
                  className="mt-6 block w-full h-10 p-4 rounded-md border-blue-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <input
                  type="text"
                  name="email"
                  id="email-address"
                  autoComplete="email"
                  placeholder="email"
                  className="mt-6 block w-full h-10 p-4 rounded-md border-gray-900 shadow-sm focus:border-gray-500 focus:ring-indigo-500 sm:text-sm"
                />

                <input
                  type="phone number"
                  name="phone number"
                  id="telnumber"
                  autoComplete="phone number"
                  placeholder="phone number"
                  className="mt-6 block w-full h-10 p-4 rounded-md border-gray-900 shadow-sm focus:border-gray-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  placeholder="country"
                  className="mt-6 block w-full h-10 p-4 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option defaultChecked className="text-gray-400">
                    Select Country
                  </option>
                  {countryData.map(({ country, id }) => {
                    return <option key={id}>{country}</option>;
                  })}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  placeholder="city/region"
                  className="mt-6 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-green-700 to-green-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
