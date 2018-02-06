import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import CartItem from '../../components/cart/cartPageItem';
import {changeChecked, fetchCarts} from "../../actions/cart";


import '../../assets/css/cart.css';

class Cart extends Component {

    caculatePrice(){
        let price = 0;
        price = this.props.items.data.reduce( (accumulator,currentValue)=>{
            if(currentValue.checked){
                return (accumulator + (currentValue.price/100)*currentValue.quantity)
            }
            return accumulator;
        } ,0);
        return price.toFixed(2);
    }

    changeAll(checked){
        let id = this.props.items.data.map( item => item.id ).join(',');
        this.props.dispatch( changeChecked(id,!checked) ).then( res =>{
            this.props.dispatch( fetchCarts() );
        } );
    }
    
    chooseAllOrNot(){
        return this.props.items.data.filter( item => item.checked ).length === this.props.items.data.length;
    }

    viewCart(){
        if(this.props.user.code === 0
            && this.props.user.data.uid
            &&this.props.items.data
            &&this.props.items.data.length) {//用户登录，获取购物车信息 且购物车有商品
            return (
                <div>
                    <div className="cart-inner">
                        <div>
                            <div className="cart-table-title">
                                <span className="name">商品信息</span>
                                <span className="operation">操作</span>
                                <span className="subtotal">小计</span>
                                <span className="num">数量</span>
                                <span className="price">单价</span>
                            </div>
                            <div className="cart-table">
                                <div className="cart-group">
                                    {this.props.items.data.map( item => <CartItem key={item.itemId} item={item} /> )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-bottom-bg fix-bottom">
                        <div className="cart-bar-operation">
                            <div>
                                <div onClick={this.changeAll.bind(this,this.chooseAllOrNot())}
                                    className="choose-all js-choose-all">
                                    <span className={['blue-checkbox-new', this.chooseAllOrNot()?'checkbox-on':''].join(' ')}><a> </a></span>
                                    全选
                                </div>
                                <div className="delete-choose-goods">删除选中的商品</div>
                            </div>
                        </div>
                        <div className="shipping">
                            <div className="shipping-box">
                                <div className="shipping-total shipping-num">
                                    <h4 className="">
                                        已选择 <i>{this.props.items.data.filter( item => item.checked ).length}</i> 件商品
                                    </h4>
                                    <h5>
                                        共计 <i >{this.props.items.data.length}</i> 件商品
                                    </h5>
                                </div>
                                <div className="shipping-total shipping-price">
                                    <h4 className="">
                                        应付总额：<span>￥</span><i >{this.caculatePrice()}</i>
                                    </h4>
                                    <h5 className="shipping-tips">
                                        应付总额不含运费
                                    </h5>

                                </div>
                            </div>
                            <span className={["jianguo-blue-main-btn big-main-btn js-checkout",this.props.items.data.filter( item => item.checked ).length?'':'disabled-btn'].join(' ')}><Link to={'/checkOut'}>现在结算</Link></span>
                        </div>
                    </div>

                </div>

            );
        }
        return (
            <div className="cart-inner">
                <div className="empty-label">
                    <h3>您的购物车中还没有商品</h3>
                    <a className="link" href="www.smartisan.com">现在选购</a>
                </div>
            </div>

        );

    }

    render(){
        return (
            <div className="hander-car">
                <div className="store-content">
                    <div className="cart-box">
                        <div className="title">
                            <h2>购物清单</h2>
                        </div>
                        {this.viewCart()}
                    </div>
                </div>
            </div>

    );
    }
}

export default connect(state=>{
    return ({
        user: state.userReducers,
        items:state.cartReducers
    });
})(Cart);