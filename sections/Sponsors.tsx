import Image from "next/image";

const sponsors = [
  { name: "IIG VARSITY", logo: "/logo/logo_iig.png" },
  { name: "WEB _ BOCKET", logo: "/logo/logo_wb.png" },
  { name: "LIT", logo: "/logo/logo_lit.jpg" },
  { name: "PYHTONSOFT", logo: "/logo/logo_pythonsoft.jpg" },
  { name: "PRADHAN", logo: "/logo/logo_pradhan.png" },
  { name: "OKCL", logo:"/logo/OKCL.png"},
];

const Sponsors = () => {
  return (
    <div id="Sponsors" className="min-h-full py-12 px-4 text-white flex flex-col items-center w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-light uppercase tracking-wide">
          Our Sponsors
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-10 w-full max-w-5xl justify-center items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-lg flex flex-col items-center justify-center w-full sm:w-1/2 h-72 sm:h-80 transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            {/* Logo Wrapper (Ensures Logo Stays Inside the Card) */}
            <div className="flex items-center justify-center w-40 h-20 sm:w-52 sm:h-24 rounded-lg">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={75}
                className="object-contain"
              />
            </div>

            {/* Sponsor Name (Larger Text, Proper Styling) */}
            <p className="text-lg sm:text-2xl font-semibold text-center mt-12 sm:mt-8 tracking-wide uppercase">
              {sponsor.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
