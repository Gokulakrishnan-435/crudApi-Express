const { connect } = require("mongoose");
const { MONGODB_URL } = require("./index");

exports.dbConnection =  () => {
  connect(MONGODB_URL, err => {
    if (err) throw err;
    console.log("mongodb connected");
  });
};
