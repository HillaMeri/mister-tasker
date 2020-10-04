import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class Home extends Component {

  componentDidMount() {
  }


  render() {
    return (
      <div className="home">
        <div className="hero-title flex column align-center">
          <h2>Manage your tasks..</h2>
          <button className="btn-get-start">
            <NavLink to='/task'>Get Start</NavLink>
          </button>
        </div>
        <div className="hero-img">
          <img src={require('../assets/img/7.jpg')} alt="" />
        </div>
      </div>
    );
  }
}

