import mongoose from "mongoose";


const specialtySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("Specialty", specialtySchema);
