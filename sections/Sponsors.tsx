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
    <div className="min-h-screen py-12 px-6 text-white flex flex-col items-center w-full">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-light uppercase">Our Sponsors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-6xl px-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center h-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={100}
              className="object-contain mb-4"
            />
            <p className="text-lg font-semibold">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;