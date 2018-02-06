import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from '../../actions/logout/index';
import {fetchCarts} from "../../actions/cart";

class UserHeader extends Component {

    logOut(){
        this.props.dispatch( logOut() ).then( res => {
            this.props.dispatch( fetchCarts() );
        } );
    }

    viewUser(){
        if(this.props.user.code === 0 && this.props.user.data.uid){ //用户登录
            return (
                <div>
                    <dl className="nav-user-avatar">
                        <dd><span className="ng-scope"> </span></dd>
                        <dt className="ng-binding">+86 138****9453</dt>
                    </dl>
                    <ul>
                        <li className="order"><a href=" ">我的订单</a></li>
                        <li className="support"><a href=" ">售后服务</a></li>
                        <li className="coupon"><a href=" ">我的优惠</a></li>
                        <li className="information"><a href=" ">账户资料</a></li>
                        <li className="address"><a href=" ">收货地址</a></li>
                        <li className="logout"><a href="javascript:void(0);" onClick={this.logOut.bind(this)}>退出</a></li>
                    </ul>
                </div>
            );
        }else{
            return (
                <ul>
                    <li className="order"><Link to="/login">登陆</Link></li>
                    <li className="support"><Link to="/register">注册</Link></li>
                </ul>
            );
        }
    }

    render(){
        return(
            <li className="nav-user">
                <a href=" ">个人中心</a>
                <div className="nav-user-wrapper">
                    <div className="nav-user-list">
                        {this.viewUser()}
                    </div>
                </div>
            </li>
        );
    }
}

export default connect(state => {
    return ({
        user: state.userReducers
    });
})(UserHeader);