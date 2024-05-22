import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Specialty" }],
  availability: [
    {
      day: {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      timeSlots: { type: Number, default: 0 },
    },
  ],
  costPerAppointment: { type: Number, required: true },
});

export default mongoose.model("Doctor", doctorSchema);
