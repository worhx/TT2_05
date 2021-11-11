import { Route, Switch } from "react-router-dom";

import AllProjects from "./pages/AllProjects";
import AllExpenses from "./pages/AllExpenses";

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
        <Route path='/expenses'>
          <AllExpenses />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
