const AllExpenses = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      project_id: 2,
      category_id: 2,
      name: "Server Maintenance",
      description:
        "Server maintenance and upgrading work to incorporate BC plans",
      amount: 30000,
      created_at: "2021-11-04T16:00:00.000Z",
      created_by: "Jacky",
      updated_at: "2021-11-06T16:00:00.000Z",
      updated_by: "Jacky",
    },
    {
      id: 2,
      project_id: 3,
      category_id: 4,
      name: "Consultant",
      description: "Consultancy services for integration work",
      amount: 10000,
      created_at: "2021-11-06T16:00:00.000Z",
      created_by: "Helen",
      updated_at: "2021-11-07T16:00:00.000Z",
      updated_by: "Helen",
    },
  ];

  return (
    <div>
      {DUMMY_DATA.map((item) => {
        return <li>{item[0]}</li>;
      })}
    </div>
  );
};

export default AllExpenses;
