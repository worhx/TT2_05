import  express  from "express";
import { getAllCategory } from "../controllers/category.js";
const categoryRoute = express.Router();

//all routes in here start with /login
categoryRoute.get('/', getAllCategory);

export default categoryRoute;