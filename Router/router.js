import express from "express";
import { userPost,userGet,accessHome,userByID } from "../Action/action.js";

const router = express.Router();

router.post("/", userPost)

router.get("/",userGet )

router.get("/:id/finduser",userByID )

router.post("/access", accessHome)

export default router;