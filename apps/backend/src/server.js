// src/server.js
import express from "express";
import cors from "cors";

// Import Routes
import analyzeRoutes from "./routes/analyze.js";
import auditRoutes from "./routes/audit.js";
import chatRoutes from "./routes/chat.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Register Routes
app.use("/analyze", analyzeRoutes);
app.use("/audit", auditRoutes);
app.use("/chat", chatRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    project: "MantleGuard",
    status: "running",
    version: "0.1.0",
    message: "Backend API is live"
  });
});

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    message: `The endpoint ${req.method} ${req.path} does not exist`
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 MantleGuard Backend running on http://localhost:${PORT}`);
});