import Image from "next/image";

const sponsors = [
  { name: "Giottus", logo: "/logos/giottus.png" },
  { name: "The Times of India", logo: "/logos/times-of-india.png" },
  { name: "Sivarajavel IAS Academy", logo: "/logos/sivarajavel.png" },
  { name: "Bahwan CyberTek", logo: "/logos/bahwan.png" },
  { name: "Coding Ninjas", logo: "/logos/coding-ninjas.png" },
  { name: "Agnikul", logo: "/logos/agnikul.png" },
];

const Sponsors = () => {
  return (
    <div id="Sponsors" className="min-h-screen py-12 px-4 text-white flex flex-col items-center w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-light uppercase">Our Sponsors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center justify-center h-40 sm:h-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={150}
              height={80}
              className="object-contain mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-lg font-semibold text-center">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
