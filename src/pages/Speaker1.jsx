import React from 'react'
import speaker from "../Assets/speaker1.jpg";
import { Link } from "react-router-dom";



const Speaker1 = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-900">
      <div className="container pt-32 pb-16 flex justify-center items-center flex-col">
        <img src={speaker} alt="" className="rounded object-fill" />
        <p className="mt-4 font-bold text-xl text-gray-100 uppercase text-center">
          Ijeoma Ejimadu
        </p>
        <p className="mt-4 text-gray-100 mx-4">
          Ijeoma Ejimadu is a first year Columbia Business School student with
          an interest in Venture Capital and Social Entrepreneurship in Emerging
          Markets. She is a DreamVC fellow, Consortium Fellow and Forte Fellow.
          Ijeoma graduated Magna Cum Laude from Prairie View A & M University
          with a degree in Chemical Engineering. She spent the last 7+ years
          solving challenging engineering problems across the chemicals, oil &
          gas and food manufacturing industries. As a process engineer at
          Chevron, she optimized the waste water treatment system resulting in
          $900,000 in annual savings and as the lead process engineer,
          increasing hydrogen production by $2.4 million per year with no
          capital investment. She has also worked with other companies such as
          DuPont, BASF and Cargill. Growing up in Port Harcourt Nigeria, Ijeoma
          witnessed her mother struggle to keep her business afloat to support
          her and her siblings. Her experience revealed the gaps that exist in
          the African female entrepreneurial community, especially in the area
          of business support, funding and capital allocation. Her passion to
          solve this problem led to the start of her non-profit, Ivery Arie, an
          organization helping African women succeed as entrepreneurs by
          providing mentorship, resources, and education. Through Ivery Arie,
          she has distributed over ~$10,000 in funds and mentorships to female
          entrepreneurs in the last year. Prior to Columbia, Ijeoma spent
          several months in Lagos, Nigeria where she explored the growing tech
          and entrepreneurial ecosystem. She connected founders to much needed
          talent and VC networks to get their ventures funded. She also worked
          with Uhuru Investment Partners, a West Africa PE firm, developing
          their Gender Lens Investment strategy, instrumental in raising $20
          million from the International Finance Corporation (IFC) to provide
          growth capital to West Africa's Small and Medium Sized Enterprises
          (SMEs), including women-led businesses. Long-term, Ijeoma desires to
          contribute to a world where barriers to accessing capital are limited
          so Africa can fully participate and contribute to a global economy. In
          her spare time, she loves to spend time with friends, travel and watch
          terrible Nollywood movies on Youtube.
        </p>
        <Link
          to="/"
          className="mt-6 bg-gradient-to-r from-green-900 to-blue-400 hover:bg-gray-200 text-white hover:text-black py-2 px-8 hover:border-gray-700 rounded text-center md:max-w-2xl border font-semibold"
        >
          Back
        </Link>
      </div>
    </section>
  );
}

export default Speaker1