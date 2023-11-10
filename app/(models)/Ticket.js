import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    priority: { type: Number },
    category: { type: String },
    progress: { type: Number },
    active: { type: Boolean },
    status : {type: String}
  },
  { timestamps: true }
);


const Ticket = mongoose.models.Ticket || mongoose.model("Ticket",ticketSchema);

export default Ticket;