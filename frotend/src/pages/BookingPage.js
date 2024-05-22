import React, { useState, useEffect } from "react";
import "./BookAppointment.css";
import axios from "axios";

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [patientName, setPatientName] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const [availableDoctors, setAvailableDoctors] = useState([]);

  useEffect(() => {
    setStatusMsg("");

    const fetchAvailableDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/doctors/avaliable"
        );
        setAvailableDoctors(response.data);
      } catch (error) {
        setStatusMsg(error.message);
        console.error("Error fetching available doctors:", error);
      }
    };

    fetchAvailableDoctors();
  }, []);

  const bookAppointment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointment/book",
        {
          doctorId: selectedDoctor,
          patientName: patientName,
        }
      );

      console.log("Appointment booked:", response.data);
      setStatusMsg("your Appointment has been scheduled!");
      setSelectedDoctor("");
      setPatientName("");
      setSelectedTime("");
      setSelectedTime("");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setStatusMsg(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Appointment booked:",
      selectedDoctor,
      selectedDate,
      selectedTime
    );
  };

  return (
    <div className="container">
      <div className="book-appointment-container">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="doctor">Select Doctor:</label>
            <select
              id="doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">Select Doctor</option>
              {availableDoctors.map((doctor) => (
                <option key={doctor.id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            onClick={bookAppointment}
            disabled={patientName === ""}
          >
            Book Appointment
          </button>
        </form>
        {statusMsg ? statusMsg : ""}
      </div>
    </div>
  );
};

export default BookAppointment;
