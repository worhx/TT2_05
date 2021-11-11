import {User} from "../models/user.js"

export const checkLogin = async (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    try{
    const data = await User.findOne({
        where : {username: username, password:password}
    });

    if(data){
        console.log("Success");
        return res.status(200).json(data);
        
    }
        throw new Error("Expense not found");
      }catch (error) {
        return res.status(500).json({error: error.message})
      }
}