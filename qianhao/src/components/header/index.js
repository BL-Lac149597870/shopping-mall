import React, {Component} from 'react';



import UserHeader from './userheader';
import CartHeader from './cartheader';


class Header extends Component {


    render(){
        return (
                <div className="nav-global">
                    <div className="container">
                        <h1 className="nav-logo">
                            <a href=" "> </a>
                        </h1>
                        <ul className="nav-aside">
                            <UserHeader />
                            <CartHeader />
                        </ul>
                        <ul className="nav-list">
                            <li><a href="/">在线商城</a></li>
                            <li><a href=" ">坚果 Pro</a></li>
                            <li><a href=" ">Smartisan M1 / M1L</a></li>
                            <li><a href=" ">Smartisan OS</a></li>
                            <li><a href=" ">欢喜云</a></li>
                            <li><a href=" ">应用下载</a></li>
                            <li><a href=" ">官方论坛</a></li>
                        </ul>
                    </div>
                </div>

        );
    }
}

export default Header;