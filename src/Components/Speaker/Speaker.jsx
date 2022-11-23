import speakersData from "./Data";

const Speaker = () => {
  return (
    <section className="bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <div className=" container lg:px-16 px-6 py-16">
        <div className="pb-12">
          <h3 className="text-gray-100 text-center font-semibold tracking-[.3rem]">
            YOU COULDN'T GET IN MORE BETTER HANDS
          </h3>
          <h1 className="text-gray-100 text-base font-semibold uppercase text-4xl text-center pt-6 tracking-[.9rem]">
            The Speakers
          </h1>
        </div>
        <div className="md:flex block">
          {speakersData.map((speaker) => {
            return (
              <div
                className="container m-4 rounded shadow-lg"
                key={speaker.id}
              >
                <img
                  className="w-full h-96 rounded object-fill"
                  src={speaker.photo}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 bg-slate-400">
                  <p className="font-bold text-xl mb-2 text-gray-800">
                    {speaker.name}
                  </p>
                  <p className="text-gray-600 text-base font-semibold">
                    {speaker.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
