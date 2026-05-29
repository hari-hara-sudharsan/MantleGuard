import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    message: "Analyze endpoint ready"
  });
});

export default router;