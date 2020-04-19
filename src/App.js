import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="navagation">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
