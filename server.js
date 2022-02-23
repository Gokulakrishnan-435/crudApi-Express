const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { PORT, NODE_ENV } = require("./config");
const { dbConnection } = require("./config/db");
const app = express();
const StudentRoute = require("./routes/student");
/*----------------database connection starts------*/
dbConnection();
/*----------------database connection ends------*/

/*-------------Middleware section starts here-------*/

if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());

/*-------------Middleware section starts here-------*/

/* -----LOAD routes starts here----------*/
app.use("/api/students", StudentRoute);
/* -----LOAD routes starts here----------*/

// listen
app.listen(PORT, err => {
  if (err) throw err;
  console.log("successfully connected to 4000");
});
