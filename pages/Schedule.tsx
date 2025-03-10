import React from "react";

const Schedule = () => {
  const events = [
    "Inauguration",
    "Hackathon",
    "Robo War",
    "Line Follower Robot Challenge",
    "AI & ML Model Contest",
    "Web Design Contest",
    "Treasure Hunt",
    "Digital Doodle Contest",
    "Mobile App Development Challenge",
    "CAD Designing Contest",
    "IoT Innovation Challenge",
    "Tech Quiz",
    "Paper Presentation",
    "Tech Debate",
    "Bridge Building Contest",
    "Circuit Designing Competition",
    "Smart Business Personal",
    "Smart Investor",
    "Smart Gamer",
    "Drone Challenger",
    "Pitch Deck Through Canva Video",
    "Closing Ceremony",
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl w-full bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-400">Event Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md text-sm">
            <thead>
              <tr className="bg-gray-700 text-white text-xs">
                <th className="p-2 border border-gray-600 text-center">S. No</th>
                <th className="p-2 border border-gray-600 text-center">Event</th>
                <th className="p-2 border border-gray-600 text-center">Date/Time</th>
                <th className="p-2 border border-gray-600 text-center">Venue</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-gray-700 text-center odd:bg-gray-900 even:bg-gray-800 text-xs">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{event}</td>
                  <td className="p-2">TBA</td>
                  <td className="p-2">TBA</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
