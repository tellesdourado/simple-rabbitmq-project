import { Router, Response } from "express";
import { messageController } from "../controllers/messageController";

const router = Router();

router.get("/message", messageController.index);
router.post("/message", messageController.create);

export { router };
