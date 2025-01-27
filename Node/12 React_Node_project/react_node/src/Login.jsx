import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
          <div className="container"><a className="navbar-brand">Solution</a>
              <button className="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse"><span className="bar1" /> <span className="bar2" /> <span className="bar3" /></button>
              <div id="my-nav" className="collapse navbar-collapse">
                  
              </div>
          </div>
      </nav>
      

      <footer className="container-fluid" id="gtco-footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-offset-3 col-md-6 col-lg-6" id="contact">
                      <h4> Admin Login</h4>
                      <input type="email" className="form-control" placeholder="Enter Admin Email" />
                      <input type="password" className="form-control" placeholder="Enter Admin password" />
                      <button type='submit' href="#" className="submit-button">Login </button>
                  </div>
              </div>
          </div>
      </footer>
    

      <footer className="container-fluid" id="gtco-footer">
          <div className="container">
              <div className="row">
              
                  <div className="col-lg-12">
                      <div className="row">
                          <div className="col-6">
                              <h4>Company</h4>
                              <ul className="nav flex-column company-nav">
                                  <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">News</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">FAQ's</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                              </ul>
                              <h4 className="mt-5">Fllow Us</h4>
                              <ul className="nav follow-us-nav">
                                  <li className="nav-item"><a className="nav-link pl-0" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                  <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                  <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                  <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                              </ul>
                          </div>
                          <div className="col-6">
                              <h4>Services</h4>
                              <ul className="nav flex-column services-nav">
                                  <li className="nav-item"><a className="nav-link" href="#">Web Design</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">Graphics Design</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">App Design</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">SEO</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">Marketing</a></li>
                                  <li className="nav-item"><a className="nav-link" href="#">Analytic</a></li>
                              </ul>
                          </div>
                          <div className="col-12">
                              <p>© 2019. All Rights Reserved. Design by <a href="https://gettemplates.co" target="_blank">GetTemplates</a>.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</div>
  )
}

export default Login