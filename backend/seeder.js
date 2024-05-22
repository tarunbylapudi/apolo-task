import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import Doctor from "./models/doctorModel.js";
import Appointment from "./models/appointmentModel.js";
import Avaliability from "./models/avaliabilityModel.js";
import Speciality from "./models/specialityScema.js";
import availability from "./data/availability.js";
import doctors from "./data/doctor.js";
import specialties from "./data/specialties.js";
import appointments from "./data/appointments.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    //await Speciality.insertMany(specialties)
    //await Doctor.insertMany(doctors)

    await Avaliability.insertMany(availability);
    await Appointment.insertMany(appointments);

    console.log("data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Doctor.deleteMany();
    await Appointment.deleteMany();
    await Avaliability.deleteMany();
    await Speciality.deleteMany();
    console.log("data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
