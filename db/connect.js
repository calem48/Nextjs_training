const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("connected successfully");
    })
    .catch((err) => console.log(err));
};

export { connectDatabase };
