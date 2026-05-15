import express from "express";
import { createApp } from "../Controller/appController.js";

const appRouter = express.Router();

appRouter.post("/create", createApp);

export default appRouter;