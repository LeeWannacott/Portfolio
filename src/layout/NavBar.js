import React, { Component } from 'react'
import Projects from './Projects';
import './Navbar.css';
import { Link, Route, NavLink, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Home from './Home'
import GitHub from './GitHub';


export class NavBar extends Component {
  render() {
    return (

      <div>
        <div class="container">
          <nav class="navbar navbar-light navbar-expand-xl" style={{ backgroundColor: "#e3f2fd" }}>
            <a class="navbar-brand" href="#">Lee Wannacott</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {/* Navbar items */}
                <li class="nav-item"><Nav.Link class='Nav-link' as={Link} to="/projects">
                  Projects
              </Nav.Link></li>
                <li class="nav-item"><Nav.Link class='Nav-link' as={Link} to="/projects">
                  Projects
              </Nav.Link></li>
                <li class="nav-item"><Nav.Link class='Nav-link' as={Link} to="/GitHub">
                  Github Statistics
              </Nav.Link></li>
                <li class="nav-item"><Nav.Link class='Nav-link' as={Link} to="/projects">
                  Contact
              </Nav.Link></li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Routing */}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/GitHub" component={GitHub} />
          </Switch>
        </div>

      </div>


    )
  }
}

export default NavBar