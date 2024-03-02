const { connect, connection } = require("mongoose");

connect("mongodb://127.0.0.1:27017/jessicasNetworkDB");

// Wrap Mongoose around local connection to MongoDB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/jessicasNetworkDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Export connection
module.exports = connection;
