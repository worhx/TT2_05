import {Category} from "../models/category.js"

export const getAllCategory = async (req,res)=>{
  const data = await Category.findAll();
    res.send(data);
}