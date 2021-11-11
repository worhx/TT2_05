import ProjectItem from "./ProjectItem";

import classes from "./ProjectList.module.css";

const Projectlist = (props) => {
  return (
    <ul className={classes.list}>
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
