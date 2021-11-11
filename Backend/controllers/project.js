import { Project } from "../models/project.js";

export const getProjectByUserId = async(req,res)=>{
    let id = req.params.id;
    
    try{
      const data = await Project.findAll({ where: { user_id:id }})
      if(data){
          console.log("Success");
          return res.status(200).json(data);
          
      }
          throw new Error("Project not found");
        }catch (error) {
          return res.status(500).json({error: error.message})
        }

  }

  export const getProjectById = async(req,res)=>{
    let id = req.params.id;
    try{
      const data = await Project.findByPk(id);
      if(data){
          console.log("Success");
          return res.status(200).json(data);
          
      }
          throw new Error("Project not found");
        }catch (error) {
          return res.status(400).json({error: error.message})
        }

  }