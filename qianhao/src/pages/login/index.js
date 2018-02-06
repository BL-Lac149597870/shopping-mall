import React, {Component} from 'react';
import '../../assets/css/login.css';
import {login} from '../../actions/login/index';
import {fetchCarts} from "../../actions/cart";

import {connect} from 'react-redux';

class Login extends Component {

    loginIn(e){
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.dispatch( login(username,password) ).then(data => {
            if(data.code === 0 ||data.code === 1){
                this.props.history.push('/');
                this.props.dispatch( fetchCarts() );
            }
        });
    }

    render(){
        return (
            <div id="login">
                <div className="title">
                    <h4>使用 Smartisan ID 登录官网</h4>
                </div>
                <form className="form">
                    <ul>
                        <li>
                            <input ref='username' type="text" placeholder="手机号/邮箱"/>
                        </li>
                        <li>
                            <input ref='password' type="password" placeholder="密码"/>
                        </li>
                    </ul>
                    <button onClick={this.loginIn.bind(this)}
                        className="btn"
                    >登陆</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);