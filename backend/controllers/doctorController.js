import Doctor from "../models/doctorModel.js";

export const getAllAvailableDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDoctorAvailability = async (req, res) => {
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor.availability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
