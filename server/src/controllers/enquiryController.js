import { z } from "zod";
import Enquiry from "../models/Enquiry.js";
const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  category: z.enum([
    "Software engineering",
    "IoT & embedded systems",
    "Cybersecurity",
    "AI & automation",
    "Academy / education",
    "Partnership",
    "Other",
  ]),
  message: z.string().trim().min(10).max(5000),
});
export async function createEnquiry(req, res, next) {
  try {
    const parsed = enquirySchema.safeParse(req.body);
    if (!parsed.success)
      return res
        .status(400)
        .json({
          success: false,
          message: "Please check the submitted fields.",
          errors: parsed.error.flatten().fieldErrors,
        });
    if (!Enquiry.db.readyState)
      return res
        .status(503)
        .json({
          success: false,
          message: "Enquiry storage is not configured yet.",
        });
    const enquiry = await Enquiry.create(parsed.data);
    return res
      .status(201)
      .json({
        success: true,
        message: "Your enquiry has been received.",
        id: enquiry.id,
      });
  } catch (error) {
    next(error);
  }
}
