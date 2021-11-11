const ProjectItem = ({ name, budget, description }) => {
  return (
    <li>
      <div>
        <h3>NAME</h3>
        <p>BUDGET</p>
        <p>DESCRIPTION</p>
      </div>
      <div>
        <button>View Expenses</button>
        <button>Delete</button>
      </div>
    </li>
  )
}

export default ProjectItem
