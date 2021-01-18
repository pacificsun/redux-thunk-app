import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PostsPage from "./pages/postPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PostsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
