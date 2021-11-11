import Projectlist from "../components/projects/ProjectList";

import Axios from "axios";
import { useState } from "react";

const AllProjects = () => {

  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getProjectData = async () => {
  //   try {
  //   let res = await axios.get("http://worhx.ddns.net:5000/user/:id/projects")
  //     setProjects(res.data.results);
  //     setLoading(true);
  //   } catch (err) {
  //     alert (err.message);
  //   }
  // };

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
      <button>api test</button>
    </section>
  );
};

export default AllProjects;
