import React from "react";

const Contacts = () => {
  const contacts = [
    { event: "Inauguration", name: "Ashalata Parida", phone: "9876543201" },
    { event: "Hackathon", name: "Ankit Kumar", phone: "7257830827" },
    { event: "Robo War", name: "Ashwini Kumar Sahoo", phone: "8093647732" },
    { event: "Line Follower Robot Challenge", name: "Prakash Sahoo", phone: "9668187814" },
    { event: "AI & ML Model Contest", name: "Samprita Patra", phone: "9937884878" },
    { event: "Web Design Contest", name: "Abinash Dash", phone: "7978825471" },
    { event: "Treasure Hunt", name: "Suhanee Sahoo", phone: "7846880822" },
    { event: "Digital Doodle Contest", name: "Ashutosh Kumar Sharma", phone: "8789679161" },
    { event: "Mobile App Development Challenge", name: "Manohar Shah", phone: "9471215919" },
    { event: "CAD Designing Contest", name: "Sidhanta Das", phone: "9348118980" },
    { event: "IoT Innovation Challenge", name: "Jyotilaxmi Senapati", phone: "6371773022" },
    { event: "Tech Quiz", name: "Gaytri Palai", phone: "7008774189" },
    { event: "Paper Presentation", name: "Biswa Ranjan Behera", phone: "9337747632" },
    { event: "Tech Debate", name: "Anil Barik", phone: "7847852171" },
    { event: "Bridge Building Contest", name: "Aman Jena", phone: "8458067536" },
    { event: "Circuit Designing Competition", name: "Sanjana Dash", phone: "9348482746" },
    { event: "Smart Business Personal", name: "Anjali Padhiary", phone: "xxxxxxxxxx" },
    { event: "Smart Investor", name: "Mohammad Asad", phone: "9570048880" },
    { event: "Smart Gamer", name: "Anshuman Bhoi", phone: "7847829324" },
    { event: "Drone Challenger", name: "Biswakalyan Udgata", phone: "9556756404" },
    { event: "Pitch Deck Through Canva Video", name: "Susmita Das", phone: "7439606986" },
    { event: "Closing Ceremony", name: "Ananya Pradhan", phone: "7846974306" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl w-full bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-400">Contact Us</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md text-sm">
            <thead>
              <tr className="bg-gray-700 text-white text-xs">
                <th className="p-2 border border-gray-600 text-center">S. No</th>
                <th className="p-2 border border-gray-600 text-center">Event</th>
                <th className="p-2 border border-gray-600 text-center">Student Coordinator</th>
                <th className="p-2 border border-gray-600 text-center">Phone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="border-b border-gray-700 text-center odd:bg-gray-900 even:bg-gray-800 text-xs">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{contact.event}</td>
                  <td className="p-2">{contact.name}</td>
                  <td className="p-2">{contact.phone}</td>
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
