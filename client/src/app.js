import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SeeRuins from "./components/see-ruins.js"
import EditRuins from "./components/edit-ruins.js"
import AddRuins from "./components/add-ruins.js"
import SeeRuinsGrid from "./components/see-ruins-grid.js"
import HomePage from "./components/homepage.js"


class App extends React.Component {
  render = () => {
    return (
      <Router>
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={SeeRuins} />
        <Route path="/addruin" exact component={AddRuins} />
        <Route path="/ruinsgrid" exact component={SeeRuinsGrid} />
        <Route path="/ruins/:id" exact component={EditRuins} />
      </Router>
    );
  }
}

export default App;
