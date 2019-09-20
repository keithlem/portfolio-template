import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Landing from './landingpage';
class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    );
  }
}

export default Main;
