// initilization database

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "ankit",
    to: "piyush",
    msg: "thik hai",
    created_at: new Date(),
  },
  {
    from: "golu",
    to: "sonu",
    msg: "what happen",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "rohit",
    msg: "jabardasat",
    created_at: new Date(),
  },
  {
    from: "manish",
    to: "saurabh",
    msg: "i am happy",
    created_at: new Date(),
  },
  {
    from: "abhishek",
    to: "ravi",
    msg: "done",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);