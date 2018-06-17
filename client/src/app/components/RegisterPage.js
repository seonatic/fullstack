import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
   
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post('http://localhost:5000/api/users/register', userData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <p className="lead text-center">Create an account</p>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      value = {this.state.name}
                      className="form-control form-control-lg"
                      placeholder="Name"
                      name="name"
                      onChange={this.onChange}
                      
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      value = {this.state.email}
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      onChange={this.onChange}
                    />
                    <small className="form-text text-muted" />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value = {this.state.password}
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value = {this.state.password2}
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                      onChange={this.onChange}
                    />
                  </div>
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>

                <p>
                  Do you have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
