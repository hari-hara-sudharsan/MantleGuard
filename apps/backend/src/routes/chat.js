import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  res.json({
    message: "Copilot endpoint ready"
  });
});

export default router;