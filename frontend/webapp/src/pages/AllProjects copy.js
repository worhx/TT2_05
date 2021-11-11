const AllProjects = ({ id, user_id, name, budget, description }) => {
  return (
    <li>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        {budget}
      </div>
      <div>
        {description}
      </div>
      <div>
        <button>View Expenses</button>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </li>
  )
}

export default AllProjects
