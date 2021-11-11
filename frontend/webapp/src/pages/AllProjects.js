import axios from "axios";
import { useState, useEffect } from "react";

import Projectlist from "../components/projects/ProjectList";
import "./pagestyle.css";

const AllProjects = () => {
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getProjectData = async () => {
  //   try {
  //   let res = await axios.get("http://worhx.ddns.net:5000/user/1/projects")
  //     setProjects(res.data.results);
  //     setLoading(true);
  //   } catch (err) {
  //     alert (err.message);
  //   }
  // };

  const [projectData, setProjectData] = useState([]);

  const getProjectData = () => {
    axios.get(`http://worhx.ddns.net:5000/user/1/projects`).then((res) => {
      // const projectData = [res]
      console.log(res);
      if (res.status === 200) {
        setProjectData(res.data);
      }
    });
  };

  const DUMMY_DATA = [
    {
      id: 1,
      user_id: 4,
      name: "RTF",
      budget: 12000,
      description: "Realtime Face Recogniton",
    },
    {
      id: 2,
      user_id: 1,
      name: "SWT",
      budget: 80000,
      description: "Smart Watch Tracker",
    },
    {
      id: 3,
      user_id: 2,
      name: "ULS",
      budget: 11000,
      description: "Upgrade Legacy System",
    },
  ];

  return (
    <section>
      <h1>All projects</h1>
      <Projectlist projects={DUMMY_DATA} />
      <button className='btn' onClick={getProjectData}>api test</button>
      {/* <button onClick={getProjectData}>{projectData.map(project => (
        <li key={project.id}>{projectData.title}</li>
      ))}</button> */}
    </section>
  );
};

export default AllProjects;
