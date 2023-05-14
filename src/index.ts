import mongoose from "mongoose";
import app from "./app";
const port: number = 8000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practiceMongoose");
    console.log("Mongo DB connection is successful.");

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to connect server", error);
  }
}

main().catch((err) => console.log(err));
