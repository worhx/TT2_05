import ProjectItem from "./ProjectItem";

const Projectlist = (props) => {
  return (
    <ul>
      {props.projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          budget={project.budget}
          description={project.description}
        />
      ))}
    </ul>
  );
};

export default Projectlist;
