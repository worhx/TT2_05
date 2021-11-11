import { useHistory } from "react-router-dom";
import { useState } from "react";

import Modal from "./ui/Modal";
import Backdrop from "./ui/Backdrop";
import "./ui/styles.css";
import Card from "./ui/Card";
import classes from "./ProjectItem.module.css"

const ProjectItem = ({ name, budget, description }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const history = useHistory();

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const routeChange = () => {
    let path = "/expenses";
    history.push(path);
  };

  return (
    <li>
      <Card>
        <div className={classes.item}>
          <h3>{name}</h3>
          <p>{budget}</p>
          <p>{description}</p>
          {/* </div>
          <div> */}
          <button className="btn btn--alt" onClick={routeChange}>
            View Expenses
          </button>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
          </div>
          <div>
        {/* </div>
        <div>
          
          
        </div>
        <div> */}
          {modalIsOpen && (
            <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
          )}
          {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
      </Card>
    </li>
  );
};

export default ProjectItem;
