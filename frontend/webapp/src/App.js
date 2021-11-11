import { Route, Switch } from "react-router-dom";

import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path='/' exact>
      hello world
      </Route>
        <Route path="/project">
          <AllProjects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
