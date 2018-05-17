import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
import validator from 'validator';
import axios from 'axios';
 let x = 1;
export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      pass: '',
      email: ''
    };
  }
  onEmailChage = (e) => {
    const email = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
    this.setState(() => ({email}));
  };
  onpassChage = (e) => {
    const pass = e.target.value; //  e.persist(); אחד מהשניים הוא חובה
    this.setState(() => ({pass}));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.pass) {
      this.setState(() => ({error: "Please Provide email and password."}));
    } else {
      this.setState(() => ({error: ""}));
      this
        .props
        .startLogin(this.state.email, this.state.pass)
        .then(() => {
          if (this.props.isAuthenticated) {
            this.setState(() => ({error: this.props.errorMassege}));
          }
        });
    }
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <img src="/images/logologin.png"/>
          <p className="form__title">Office Food Ordering. Simplified.</p>
          <form className="form" onSubmit={this.onSubmit}>
            <input
              type="email"
              placeholder="Email"
              autoFocus
              className="text-input"
              value={this.state.email}
              onChange={this.onEmailChage}/>
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              value={this.state.pass}
              onChange={this.onpassChage}/> {this.state.error && <p className="form__error">{this.state.error}</p>}
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, pass) => dispatch(startLogin(email, pass)),
  logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.msg,
  errorMassege: state.auth.msg
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// export const LoginPage = ({ startLogin }) => (   <div className="box-layout">
//     <div className="box-layout__box">       <h1
// className="box-layout__title">SharEat</h1>       <p>Office Food
// Ordering.Simplified.</p>       <button className="button"
// onClick={startLogin}>Login</button>     </div>   </div> );