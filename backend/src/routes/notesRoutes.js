import express from "express";
import { getALLNotes, getNote, createNote, updateNote, deleteNote } from "../controllers/notesControllers.js";

// You can see all the API endpoints at a glance in Routes, so move controllers to Comtrollers
const router = express.Router();

// endpoint: path + HTTP methods. eg:GET /api/notes

router.get("/", getALLNotes);
router.get("/:id", getNote);

router.post("/", createNote);
  
router.put("/:id",updateNote);

router.delete("/:id", deleteNote);

export default router;