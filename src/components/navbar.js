import React from 'react'

import { Link } from 'react-router-dom'
export default function NavBar(props) {
 
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode.toLowerCase()}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.text}</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input navbar-brand" style={{marginTop:12}} onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="navbar-brand" htmlFor="flexSwitchCheckDefault" >Use {props.mode} mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
