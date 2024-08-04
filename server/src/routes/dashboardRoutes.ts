// centralized location where all the controllers go 

import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";

const router = Router();
router.get("/", getDashboardMetrics) // http://localhost:8000/dashboard/...

export default router;