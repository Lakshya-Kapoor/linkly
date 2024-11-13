import mongoose, { Schema } from "mongoose";

const URLSchema = new Schema({
  alias: { type: Boolean, default: false },
  shortURL: { type: String, unique: true, required: true },
  originalURL: { type: String, required: true },
});

const url = mongoose.model("URL", URLSchema);
export default url;
