import  express  from "express";
import { getProjectById } from "../controllers/project.js";
const projectRoute = express.Router();

//all routes in here start with /users
projectRoute.get('/:id', getProjectById);

export default projectRoute;