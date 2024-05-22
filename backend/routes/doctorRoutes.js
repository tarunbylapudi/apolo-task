import express from "express";
import {
  getAllAvailableDoctors,
  getDoctorAvailability,
} from "../controllers/doctorController.js";

const router = express.Router();

router.route("/avaliable").get(getAllAvailableDoctors);
router.route("/:id").get(getDoctorAvailability);

export default router;
