import { Route, Switch } from "react-router-dom";

import AllProjects from "./pages/AllProjects";
import AllExpenses from "./pages/AllExpenses";
import Backdrop from "./components/projects/ui/Backdrop";
import Modal from "./components/projects/ui/Modal";

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
