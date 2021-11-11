const ProjectItem = ({ name, budget, description }) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <p>{budget}</p>
        <p>{description}</p>
      </div>
      <div>
        <button>View Expenses</button>
        <button>Delete</button>
      </div>
    </li>
  )
}

export default ProjectItem
