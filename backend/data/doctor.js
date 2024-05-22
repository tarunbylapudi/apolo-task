const doctors = [
  {
    name: "Dr. John Doe",
    specialties: ["664dd4c9882a66f52137edb3", "664dd4c9882a66f52137edb4"],
    availability: [
      { day: "Monday", timeSlots: 5 },
      { day: "Tuesday", timeSlots: 4 },
      { day: "Wednesday", timeSlots: 6 },
      { day: "Thursday", timeSlots: 3 },
      { day: "Friday", timeSlots: 7 },
    ],
    costPerAppointment: 50,
  },
  {
    name: "Dr. Jane Smith",
    specialties: ["664dd4c9882a66f52137edb5", "664dd4c9882a66f52137edb6"],
    availability: [
      { day: "Monday", timeSlots: 3 },
      { day: "Tuesday", timeSlots: 6 },
      { day: "Wednesday", timeSlots: 4 },
      { day: "Thursday", timeSlots: 5 },
      { day: "Friday", timeSlots: 2 },
    ],
    costPerAppointment: 60,
  },
];

export default doctors;
