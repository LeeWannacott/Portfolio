import React, { Component } from 'react'
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div class="container">

            <nav class="navbar navbar-light navbar-expand-xl" style={{backgroundColor: "#e3f2fd"}}>
      
            <a class="navbar-brand" href="#">Lee Wannacott</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Projects <span class="sr-only">(current)</span></a>
                </li>
               
                <li class="nav-item">
                  <a class="nav-link" href="#">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Github Statistics</a>
                </li>

              </ul>
            </div>
          </nav>
          
          </div>
          
          
        )
    }
}

export default Navigation
