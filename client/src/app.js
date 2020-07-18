import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SeeRuins from "./components/see-ruins.js"
import EditRuins from "./components/edit-ruins.js"
import AddRuins from "./components/add-ruins.js"
import SeeRuinsGrid from "./components/see-ruins-grid.js"


class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Route path="/" exact component={SeeRuins} />
        <Route path="/addruin" component={AddRuins} />
        <Route path="/ruinsgrid" component={SeeRuinsGrid} />
        <Route path="/ruins/:id" component={EditRuins} />
      </Router>
    );
  }
}

export default App;
