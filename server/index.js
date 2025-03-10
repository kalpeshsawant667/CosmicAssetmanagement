const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());
//Routes//

//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});