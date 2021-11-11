import {Category} from "../models/category.js"

export const getAllCategory = async (req,res)=>{
  try{
    const data = await Category.findAll();
    if(data){
        console.log("Success");
        return res.status(200).json(data);
        
    }
        throw new Error("Expense not found");
      }catch (error) {
        return res.status(500).json({error: error.message})
      }
}
