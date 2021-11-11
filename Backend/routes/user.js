import  express  from "express";
import { getProjectByUserId } from "../controllers/project.js";
const userRoute = express.Router();

//all routes in here start with /users
userRoute.get('/:id/projects', getProjectByUserId);

export default userRoute;