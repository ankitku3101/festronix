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
    <div className="min-h-screen bg-dark py-12 px-6 text-white flex flex-col items-center w-full">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white uppercase bg-pink-600 px-10 py-5 inline-block rounded-lg shadow-2xl">Our Sponsors</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-6xl px-6">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-3xl shadow-2xl flex items-center justify-center h-48 transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:shadow-3xl"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={250}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
