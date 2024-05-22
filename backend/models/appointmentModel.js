import mongoose from "mongoose";



const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  patientName: { type: String, required: true },
  dateTime: { type: Date, required: true },
  duration: { type: Number, default: 20 },
  cost: { type: Number, required: true },
});

export default mongoose.model("Appointment", appointmentSchema);
