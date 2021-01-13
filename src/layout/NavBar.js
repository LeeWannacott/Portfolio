import React, { Component, useCallback } from 'react'
import { Link, Route, NavLink, Switch, match } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import './Navbar.css';
import Home from './Home'
import Projects from './Projects';
import GitHub from './GitHub';
import Contact from './Contact'
export class NavBar extends Component {


  render() {
    return (

      <div>
        <div className="container">
          <nav className="navbar navbar-light navbar-expand-xl" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Lee Wannacott</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* Navbar items */}
                
        <li className="nav-item">
            <Nav.Link className='nav-link' as={Link} to="/Projects">
                Projects
            </Nav.Link>
        </li>
                <li className="nav-item"><Nav.Link className='nav-link' as={Link} to="/GitHub">
                  Github Statistics
              </Nav.Link></li>
                <li className="nav-item"><Nav.Link className='nav-link' as={Link} to="/Contact">
                  Contact
              </Nav.Link></li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
        {/* Routing */}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path="/GitHub" component={GitHub} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>

      </div>

    )
  }
}

export default NavBar
