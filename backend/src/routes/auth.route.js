import express from "express";
import { checkAuth } from "../controllers/auth.controllers.js";
import { protect } from "../middleware/atuh.middleware.js";

const router = express.Router();

// /api/auth/check
router.get("/check",protectRoute,checkAuth);

export default router;