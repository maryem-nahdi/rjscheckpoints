import React, { Component } from "react";
export default class ForgotPassword extends Component {

    reset() {
        alert('Password is sent to your email');
    }

    render() {
        return (<div>
            <div className="form-group">
                    <label>Write your Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
            <button onClick={this.reset.bind(this)} className="btn btn-primary btn-block">Reset Password</button>
            <p className="forgot-password text-right">
                    Return to <a href="/login">Login?</a>
                </p>
        </div>)
    }
}