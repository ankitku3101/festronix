import React from "react";

const Schedule = () => {
  const events = [
    { event: "Inauguration", organizer: "Ashalata Parida", phone: "9876543210", venue: "Main Auditorium", timing: "10:00 AM - 11:00 AM" },
    { event: "Hackathon", organizer: "Ankit Kumar", phone: "9876543211", venue: "Lab 3, Block A", timing: "11:30 AM - 5:00 PM" },
    { event: "Robo War", organizer: "Ashwini Kumar Sahoo", phone: "9876543212", venue: "Ground Arena", timing: "2:00 PM - 5:00 PM" },
    { event: "Line Follower Robot Challenge", organizer: "Prakash Sahoo", phone: "9876543213", venue: "Mech Lab", timing: "3:00 PM - 6:00 PM" },
    { event: "AI & ML Model Contest", organizer: "Samprita Patra", phone: "9876543214", venue: "AI Lab", timing: "4:00 PM - 6:30 PM" },
    { event: "Web Design Contest", organizer: "Abinash Dash", phone: "9876543215", venue: "CS Lab 1", timing: "11:00 AM - 1:00 PM" },
    { event: "Treasure Hunt", organizer: "Suhanee Sahoo", phone: "9876543216", venue: "Campus Wide", timing: "12:00 PM - 2:00 PM" },
    { event: "Digital Doodle Contest", organizer: "Ashutosh Kumar Sharma", phone: "9876543217", venue: "Graphics Lab", timing: "3:30 PM - 5:30 PM" },
    { event: "Mobile App Development Challenge", organizer: "Manohar Shah", phone: "9876543218", venue: "CS Lab 2", timing: "2:30 PM - 4:30 PM" },
    { event: "CAD Designing Contest", organizer: "Sidhanta Das", phone: "9876543219", venue: "CAD Lab", timing: "10:30 AM - 12:30 PM" },
    { event: "IoT Innovation Challenge", organizer: "Jyotilaxmi Senapati", phone: "9876543220", venue: "Electronics Lab", timing: "3:00 PM - 5:00 PM" },
    { event: "Tech Quiz", organizer: "Gaytri Palai", phone: "9876543221", venue: "Seminar Hall", timing: "1:30 PM - 3:30 PM" },
    { event: "Paper Presentation", organizer: "Biswa Ranjan Behera", phone: "9876543222", venue: "Conference Room", timing: "11:00 AM - 12:30 PM" },
    { event: "Tech Debate", organizer: "Anil Barik", phone: "9876543223", venue: "Debate Hall", timing: "12:30 PM - 2:00 PM" },
    { event: "Bridge Building Contest", organizer: "Aman Jena", phone: "9876543224", venue: "Civil Lab", timing: "2:00 PM - 4:00 PM" },
    { event: "Circuit Designing Competition", organizer: "Sanjana Dash", phone: "9876543225", venue: "Electronics Lab", timing: "3:00 PM - 5:30 PM" },
    { event: "Smart Business Personal", organizer: "Anjali Padhiary", phone: "9876543226", venue: "Business Hall", timing: "4:30 PM - 6:00 PM" },
    { event: "Smart Investor", organizer: "Mohammad Asad", phone: "9876543227", venue: "Finance Room", timing: "10:00 AM - 11:30 AM" },
    { event: "Smart Gamer", organizer: "Anshuman Bhoi", phone: "9876543228", venue: "Gaming Zone", timing: "2:30 PM - 5:30 PM" },
    { event: "Drone Challenger", organizer: "Biswakalyan Udgata", phone: "9876543229", venue: "Open Field", timing: "4:00 PM - 6:30 PM" },
    { event: "Pitch Deck Through Canva Video", organizer: "Susmita Das", phone: "9876543230", venue: "Media Lab", timing: "12:00 PM - 2:30 PM" },
    { event: "Closing Ceremony", organizer: "Ananya Pradhan", phone: "9876543231", venue: "Main Auditorium", timing: "7:00 PM - 8:00 PM" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-6 text-green-400">Event Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3 border border-gray-600 text-center">Event</th>
                <th className="p-3 border border-gray-600 text-center">Organizer</th>
                <th className="p-3 border border-gray-600 text-center">Phone</th>
                <th className="p-3 border border-gray-600 text-center">Venue</th>
                <th className="p-3 border border-gray-600 text-center">Timing</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-gray-700 text-center odd:bg-gray-900 even:bg-gray-800">
                  <td className="p-3">{event.event}</td>
                  <td className="p-3">{event.organizer}</td>
                  <td className="p-3">{event.phone}</td>
                  <td className="p-3">{event.venue}</td>
                  <td className="p-3">{event.timing}</td>
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
