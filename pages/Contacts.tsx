import React from "react";

const eventContacts = [
  { event: "Inauguration", coordinator: "Ashalata Parida", phone: "XXXXXX" },
  { event: "Hackathon", coordinator: "Ankit Kumar", phone: "XXXXXX" },
  { event: "Robo War", coordinator: "Ashwini Kumar Sahoo", phone: "XXXXXX" },
  { event: "Line Follower Robot Challenge", coordinator: "Prakash Sahoo", phone: "XXXXXX" },
  { event: "AI & ML Model Contest", coordinator: "Samprita Patra", phone: "XXXXXX" },
  { event: "Web Design Contest", coordinator: "Abinash Dash", phone: "XXXXXX" },
  { event: "Treasure Hunt", coordinator: "Suhanee Sahoo", phone: "XXXXXX" },
  { event: "Digital Doodle Contest", coordinator: "Ashutosh Kumar Sharma", phone: "XXXXXX" },
  { event: "Mobile App Development Challenge", coordinator: "Manohar Shah", phone: "XXXXXX" },
  { event: "CAD Designing Contest", coordinator: "Sidhanta Das", phone: "XXXXXX" },
  { event: "IoT Innovation Challenge", coordinator: "Jyotilaxmi Senapati", phone: "XXXXXX" },
  { event: "Tech Quiz", coordinator: "Gaytri Palai", phone: "XXXXXX" },
  { event: "Paper Presentation", coordinator: "Biswa Ranjan Behera", phone: "XXXXXX" },
  { event: "Tech Debate", coordinator: "Anil Barik", phone: "XXXXXX" },
  { event: "Bridge Building Contest", coordinator: "Aman Jena", phone: "XXXXXX" },
  { event: "Circuit Designing Competition", coordinator: "Sanjana Dash", phone: "XXXXXX" },
  { event: "Smart Business Personal", coordinator: "Anjali Padhiary", phone: "XXXXXX" },
  { event: "Smart Investor", coordinator: "Mohammad Asad", phone: "XXXXXX" },
  { event: "Smart Gamer", coordinator: "Anshuman Bhoi", phone: "XXXXXX" },
  { event: "Drone Challenger", coordinator: "Biswakalyan Udgata", phone: "XXXXXX" },
  { event: "Pitch Deck Through Canva Video", coordinator: "Susmita Das", phone: "XXXXXX" },
  { event: "Closing Ceremony", coordinator: "Ananya Pradhan", phone: "XXXXXX" }
];

const Contacts = () => {
  return (
    <div style={{ backgroundColor: "var(--color-light)", padding: "20px", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "var(--color-dark)", fontSize: "24px", marginBottom: "10px" }}>
        Event Contacts
      </h1>
      <p style={{ textAlign: "center", color: "var(--color-dark)", fontSize: "18px", marginBottom: "20px" }}>
        Below are the details of event managers.
      </p>

      {/* Table for Event Contacts */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ width: "90%", maxWidth: "800px", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--color-green)", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>Event</th>
              <th style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>Student Coordinator</th>
              <th style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {eventContacts.map((contact, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f2f2f2" }}>
                <td style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>{contact.event}</td>
                <td style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>{contact.coordinator}</td>
                <td style={{ padding: "10px", border: "1px solid var(--color-dark)" }}>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
