import  express  from "express";
import { checkLogin } from "../controllers/login.js";
const loginRouter = express.Router();

//all routes in here start with /login
loginRouter.post('/', checkLogin);


export default loginRouter;