import React from "react";

const Contacts = () => {
  const contacts = [
    { event: "Inauguration", name: "Ashalata Parida", phone: "9876543201" },
    { event: "Hackathon", name: "Ankit Kumar", phone: "9876543211" },
    { event: "Robo War", name: "Ashwini Kumar Sahoo", phone: "9876543212" },
    { event: "Line Follower Robot Challenge", name: "Prakash Sahoo", phone: "9876543213" },
    { event: "AI & ML Model Contest", name: "Samprita Patra", phone: "9876543214" },
    { event: "Web Design Contest", name: "Abinash Dash", phone: "9876543215" },
    { event: "Treasure Hunt", name: "Suhanee Sahoo", phone: "9876543216" },
    { event: "Digital Doodle Contest", name: "Ashutosh Kumar Sharma", phone: "9876543217" },
    { event: "Mobile App Development Challenge", name: "Manohar Shah", phone: "9876543218" },
    { event: "CAD Designing Contest", name: "Sidhanta Das", phone: "9876543219" },
    { event: "IoT Innovation Challenge", name: "Jyotilaxmi Senapati", phone: "9876543220" },
    { event: "Tech Quiz", name: "Gaytri Palai", phone: "9876543221" },
    { event: "Paper Presentation", name: "Biswa Ranjan Behera", phone: "9876543222" },
    { event: "Tech Debate", name: "Anil Barik", phone: "9876543223" },
    { event: "Bridge Building Contest", name: "Aman Jena", phone: "9876543224" },
    { event: "Circuit Designing Competition", name: "Sanjana Dash", phone: "9876543225" },
    { event: "Smart Business Personal", name: "Anjali Padhiary", phone: "9876543226" },
    { event: "Smart Investor", name: "Mohammad Asad", phone: "9876543227" },
    { event: "Smart Gamer", name: "Anshuman Bhoi", phone: "9876543228" },
    { event: "Drone Challenger", name: "Biswakalyan Udgata", phone: "9876543229" },
    { event: "Pitch Deck Through Canva Video", name: "Susmita Das", phone: "9876543230" },
    { event: "Closing Ceremony", name: "Ananya Pradhan", phone: "9876543231" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-400">Contact Us</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3 border border-gray-600 text-center">Event</th>
                <th className="p-3 border border-gray-600 text-center">Student Coordinator</th>
                <th className="p-3 border border-gray-600 text-center">Phone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-700 text-center ${
                    index % 2 === 0 ? "bg-gray-600" : "bg-gray-500"
                  }`}
                >
                  <td className="p-3 text-white">{contact.event}</td>
                  <td className="p-3 text-white">{contact.name}</td>
                  <td className="p-3 text-white">{contact.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
