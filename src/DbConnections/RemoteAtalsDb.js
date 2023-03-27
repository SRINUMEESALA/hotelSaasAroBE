import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://SrinuMeesala:RadheKrishn@cluster0.sfhzdpm.mongodb.net/SaasAro?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Atlas Db connected successfully!");
  } catch (error) {
    console.log("Could not connect to Atlas DB");
  }
};
export default connectToDB;
