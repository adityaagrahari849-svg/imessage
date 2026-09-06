import express from "express";
import {
    getUsersForSidebar,
    getConversationForSidebar,
    getMessages,
    sendMessage,
} from "../controllers/message.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations", getConversationForSidebar);
router.get("/:id", getMessages);
router.post("/send/:id", upload.single("media"), sendMessage);
// frontend variable should also be name as media

export default router;