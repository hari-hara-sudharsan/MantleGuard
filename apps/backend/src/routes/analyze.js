import express from "express";
import multer from "multer";
import fs from "fs";

import { analyzeContract }
from "../services/gasProfiler.js";

const router = express.Router();

const upload = multer({
    dest:"src/uploads/"
});

router.post(
    "/",
    upload.single("contract"),
    async (req,res)=>{

        try{

            const code = fs.readFileSync(
                req.file.path,
                "utf8"
            );

            const result =
                analyzeContract(code);

            res.json(result);

        }catch(error){

            res.status(500).json({
                error:error.message
            });

        }

    }
);

export default router;