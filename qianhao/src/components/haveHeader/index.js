import React, {Component} from 'react';

import Main from '../../pages/main/index';
import Detail from '../../pages/detail/index';
import Cart from '../../pages/cart/index';
import CheckOut from '../../pages/checkout/index';
import Payment from '../../pages/payment/index';
import User from '../../pages/user/index';
import UserAddress from '../../pages/user/address/index';
import UserOrder from '../../pages/user/order/index';
import Header from '../../components/header/index';
import SubHeader from '../../components/header/sub';

import '../../assets/css/header.css';

import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {verify} from '../../actions/verify/index';

class HaveHeader extends Component {

    componentDidMount(){
        this.props.dispatch( verify() );
    }

    render(){
        return (
            <div>
                <div id="header">
                    <Header />
                    <SubHeader />
                </div>


                <div id='main'>

                    <Route path='/' exact component={Main} />
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout' component={CheckOut} />
                    <Route path='/payment' component={Payment} />
                    <Route path='/user' component={User} />
                    <Route path='/user/address' component={UserAddress} />
                    <Route path='/user/order' component={UserOrder} />

                </div>
            </div>
        );
    }
}

export default connect()(HaveHeader);






