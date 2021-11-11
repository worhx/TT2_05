

const AllProjects = ({ id, user_id, name, budget, description }) => {
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
      <ul>
        {DUMMY_DATA.map((project) => {
          return <li key={project.id}>{project.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default AllProjects;
