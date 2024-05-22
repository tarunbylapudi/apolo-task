import express from "express";
import {
  bookAppointment,
  getAppointmentHistory,
} from "../controllers/appController.js";

const router = express.Router();

router.route("/book").post(bookAppointment);
router.route("/:id").get(getAppointmentHistory);

export default router;
