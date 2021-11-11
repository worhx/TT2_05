import { useHistory } from "react-router-dom";

const ProjectItem = ({ name, budget, description }) => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/expenses";
    history.push(path);
  };

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>{budget}</p>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={routeChange}>View Expenses</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default ProjectItem;
