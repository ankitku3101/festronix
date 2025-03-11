import Image from "next/image";

const sponsors = [
  { name: "IIG VARSITY", logo: "/logo/logo_iig.png" },
  { name: "WEB _ BOCKET", logo: "/logo/logo_wb.png" },
];

const Sponsors = () => {
  return (
    <div id="Sponsors" className="min-h-screen py-12 px-4 text-white flex flex-col items-center w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-light uppercase">Our Sponsors</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 w-full max-w-5xl justify-center items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full sm:w-1/2 h-60 sm:h-72 transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center w-48 h-24 sm:w-56 sm:h-32 bg-white rounded-lg shadow-md">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={180}
                height={90}
                className="object-contain"
              />
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-center mt-10">{sponsor.name}</p>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
