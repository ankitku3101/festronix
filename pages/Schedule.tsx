import React from "react";

const Schedule = () => {
  const events = [
    { 
      event: "Inauguration", 
      venue: "218", 
      time: "Day-1, 9:00 AM - 10:00 AM", 
      name: "Ashalata Parida", 
      phone: "9876543201"
    },
    { 
      event: "CodeNexus - Hackathon", 
      venue: "218", 
      time: "Day-1:09:00AM - Day-2:12:00PM", 
      name: "Ankit Kumar", 
      phone: "7257830827" 
    },
    { 
      event: "Robo Sumo War", 
      venue: "TBA", 
      time: "Day-2, 9:00 AM - 12:00 PM", 
      name: "Smarak Mohanty", 
      phone: "8018107596" 
    },
    { 
      event: "Line Follower Robot Challenge", 
      venue: "331", 
      time: "Day-1, 10:00 AM - 1:00 PM", 
      name: "Prakash Sahoo", 
      phone: "9668187814" 
    },
    { 
      event: "AI & ML Model Contest", 
      venue: "109", 
      time: "Day-1, 12:30 PM - 4:00 PM", 
      name: "Samprita Patra", 
      phone: "9937884878" 
    },
    { 
      event: "Web Design Contest", 
      venue: "323", 
      time: "Day-1, 11:00 AM - 2:00 PM", 
      name: "Abinash Dash", 
      phone: "7978825471" 
    },
    { 
      event: "Treasure Hunt", 
      venue: "TBA", 
      time: "Day-1, 12:30 PM - 3:30 PM", 
      name: "Suhanee Sahoo", 
      phone: "7846880822" 
    },
    { 
      event: "Digital Doodle Contest", 
      venue: "222", 
      time: "Day-1, 10:00 AM - 12:00 PM", 
      name: "Ashutosh Kumar Sharma", 
      phone: "8789679161" 
    },
    { 
      event: "Mobile App Development Challenge", 
      venue: "109", 
      time: "Day-2, 9:00 AM - 12:00 PM", 
      name: "Manohar Shah", 
      phone: "9471215919" 
    },
    { 
      event: "CAD Designing Contest", 
      venue: "TBA", 
      time: "Day-2, 10:00 AM - 1:00 PM", 
      name: "Sidhanta Das", 
      phone: "9348118980" 
    },
    { 
      event: "IoT Innovation Challenge", 
      venue: "222/223", 
      time: "Day-2, 10:00 AM - 2:00 PM", 
      name: "Jyotilaxmi Senapati", 
      phone: "6371773022" 
    },
    { 
      event: "Tech Quiz", 
      venue: "426", 
      time: "Day-2, 11:00 AM - 1:00 PM", 
      name: "Gaytri Palai", 
      phone: "7008774189" 
    },
    { 
      event: "Paper Presentation", 
      venue: "220", 
      time: "Day-2, 9:00 AM - 1:00 PM", 
      name: "Biswa Ranjan Behera", 
      phone: "9337747632" 
    },
    { 
      event: "Tech Debate", 
      venue: "426", 
      time: "Day-1, 2:00 PM - 4:00 PM", 
      name: "Anil Barik", 
      phone: "7847852171" 
    },
    { 
      event: "Bridge Building Contest", 
      venue: "TBA", 
      time: "Day-2, 2:00 PM - 4:00 PM", 
      name: "Aman Jena", 
      phone: "8458067536" 
    },
    { 
      event: "Circuit Designing Competition", 
      venue: "TBA", 
      time: "Day-1, 10:00 AM - 12:30 PM", 
      name: "Sanjana Dash", 
      phone: "9348482746" 
    },
    { 
      event: "Smart Business Personal", 
      venue: "325", 
      time: "Day-2, 10:00 AM - 4:00 PM", 
      name: "Anjali Padhiary", 
      phone: "xxxxxxxxxx" 
    },
    { 
      event: "Smart Investor", 
      venue: "220", 
      time: "Day-1, 10:00 AM - 4:00 PM", 
      name: "Mohammad Asad", 
      phone: "9570048880" 
    },
    { 
      event: "Smart Gamer", 
      venue: "319", 
      time: "Day-1, 10:00 AM - 1:00 PM", 
      name: "Anshuman Bhoi", 
      phone: "7847829324" 
    },
    { 
      event: "Drone Challenger", 
      venue: "TBA", 
      time: "Day-1, 2:00 PM - 4:00 PM", 
      name: "Biswakalyan Udgata", 
      phone: "9556756404" 
    },
    { 
      event: "Pitch Deck Through Canva Video", 
      venue: "TBA", 
      time: "Day-2, 10:00 AM - 2:00 PM", 
      name: "Susmita Das", 
      phone: "7439606986" 
    },
    { 
      event: "Closing Ceremony", 
      venue: "218", 
      time: "Day-2, 3:00 PM - 4:00 PM", 
      name: "Ananya Pradhan", 
      phone: "7846974306" 
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl w-full bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-400">Event Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-700 rounded-lg shadow-md text-sm">
            <thead>
              <tr className="bg-gray-700 text-white text-xs">
                <th className="p-2 border border-gray-600 text-center">S. No</th>
                <th className="p-2 border border-gray-600 text-center">Event</th>
                <th className="p-2 border border-gray-600 text-center">Venue</th>
                <th className="p-2 border border-gray-600 text-center">Time</th>
                <th className="p-2 border border-gray-600 text-center">Coordinator</th>
                <th className="p-2 border border-gray-600 text-center">Phone</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="border-b border-gray-700 text-center odd:bg-gray-900 even:bg-gray-800 text-xs">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{event.event}</td>
                  <td className="p-2">{event.venue}</td>
                  <td className="p-2">{event.time}</td>
                  <td className="p-2">{event.name}</td>
                  <td className="p-2">{event.phone}</td>
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
