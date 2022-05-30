const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json())
const db = require("./models");

// Router
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=> {
        console.log("Server is running on port 3001");
    });
});




