import mongoose from "mongoose";
const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Software engineering",
        "IoT & embedded systems",
        "Cybersecurity",
        "AI & automation",
        "Academy / education",
        "Partnership",
        "Other",
      ],
    },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ["new", "in_progress", "closed"],
      default: "new",
    },
  },
  { timestamps: true },
);
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", enquirySchema);
