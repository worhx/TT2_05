import { useHistory } from "react-router-dom";
import { useState } from "react";

import Modal from "./ui/Modal";
import Backdrop from "./ui/Backdrop";

const ProjectItem = ({ name, budget, description }) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const history = useHistory();

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false)
  }

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
        <button onClick={deleteHandler}>Delete</button>
      </div>
      <div>
        { modalIsOpen && <Modal />}
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
      </div>
    </li>
  );
};

export default ProjectItem;
