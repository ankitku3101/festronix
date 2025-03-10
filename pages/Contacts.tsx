import React from "react";

const Contacts = () => {
  const contacts = [
    { event: "Inauguration", name: "Ashalata Parida" },
    { event: "Hackathon", name: "Ankit Kumar" },
    { event: "Robo War", name: "Ashwini Kumar Sahoo" },
    { event: "Line Follower Robot Challenge", name: "Prakash Sahoo" },
    { event: "AI & ML Model Contest", name: "Samprita Patra" },
    { event: "Web Design Contest", name: "Abinash Dash" },
    { event: "Treasure Hunt", name: "Suhanee Sahoo" },
    { event: "Digital Doodle Contest", name: "Ashutosh Kumar Sharma" },
    { event: "Mobile App Development Challenge", name: "Manohar Shah" },
    { event: "CAD Designing Contest", name: "Sidhanta Das" },
    { event: "IoT Innovation Challenge", name: "Jyotilaxmi Senapati" },
    { event: "Tech Quiz", name: "Gaytri Palai" },
    { event: "Paper Presentation", name: "Biswa Ranjan Behera" },
    { event: "Tech Debate", name: "Anil Barik" },
    { event: "Bridge Building Contest", name: "Aman Jena" },
    { event: "Circuit Designing Competition", name: "Sanjana Dash" },
    { event: "Smart Business Personal", name: "Anjali Padhiary" },
    { event: "Smart Investor", name: "Mohammad Asad" },
    { event: "Smart Gamer", name: "Anshuman Bhoi" },
    { event: "Drone Challenger", name: "Biswakalyan Udgata" },
    { event: "Pitch Deck Through Canva Video", name: "Susmita Das" },
    { event: "Closing Ceremony", name: "Ananya Pradhan" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-dark text-light p-8">
      <div className="max-w-5xl w-full bg-light p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-green">Contact Us</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md">
            <thead>
              <tr className="bg-dark text-light">
                <th className="p-3 border border-gray-700 text-center">Event</th>
                <th className="p-3 border border-gray-700 text-center">Student Coordinator</th>
                <th className="p-3 border border-gray-700 text-center">Phone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="border-b border-gray-700 text-center bg-gray-100 odd:bg-white even:bg-gray-200">
                  <td className="p-3">{contact.event}</td>
                  <td className="p-3">{contact.name}</td>
                  <td className="p-3">XXXXXXX</td>
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
