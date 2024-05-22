import Appointment from "../models/appointmentModel.js";
import Doctor from "../models/doctorModel.js";

function validateDay(dayNumber) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (dayNumber >= 0 && dayNumber < 7) {
        return daysOfWeek[dayNumber];
    } else {
        return "Invalid day number";
    }
}

export const bookAppointment = async (req, res) => {
  const { doctorId, patientName } = req.body;
  let dateTime=new Date()
  try {
    // Check doctor's availability
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    console.log(doctor,"doctor")
    console.log(dateTime.getDay(),"day")


    // Check if the appointment slot is available
    const availability = doctor.availability.find(
      (slot) => slot.day === validateDay(dateTime.getDay())
    );

    console.log(availability,"availability")
    if (!availability || availability.timeSlots <= 0) {
      return res
        .status(400)
        .json({ message: "Doctor not available at this time" });
    }
    // Deduct the time slot from availability
    availability.timeSlots -= 1;
    await doctor.save();
    // Book the appointment
    const appointment = new Appointment({
      doctor: doctorId,
      patientName,
      dateTime,
      cost: doctor.costPerAppointment,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAppointmentHistory = async (req, res) => {
  const doctorId = req.params.doctorId;
  try {
    const appointments = await Appointment.find({ doctor: doctorId });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
