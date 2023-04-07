const mongoose = require("mongoose"); 
const dbUser = process.env.DB_USER; 
const dbPassword = process.env.DB_PASS;
const dbBanco = process.env.DB_DB

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@${dbBanco}` 
    );
    console.log("Conectou ao banco de dados!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;