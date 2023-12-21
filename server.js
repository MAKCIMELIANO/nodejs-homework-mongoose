const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://makcimeliano:R5h40O6evFwlO2Ys@cluster0.y7eoh95.mongodb.net/contacts_book?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
