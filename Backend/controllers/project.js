import { Project } from "../models/project.js";

export const getProjectByUserId = async(req,res)=>{
    let id = req.params.id;
    const data = await Project.findAll({ where: { user_id:id }})
    res.send(data);
  }

  export const getProjectById = async(req,res)=>{
    let id = req.params.id;
    const data = await Project.findByPk(id);
    res.send(data);
  }