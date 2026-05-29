import express from "express";
import cors from "cors";

import analyzeRoutes
from "./routes/analyze.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/analyze", analyzeRoutes);

app.get("/", (req,res)=>{

    res.json({
        project:"MantleGuard",
        status:"running"
    });

});

app.listen(5000,()=>{

    console.log(
        "Server running on port 5000"
    );

});