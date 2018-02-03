import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchCarts,deleteToCart} from '../../actions/cart/index';

class CartHeader extends Component {

    componentWillReceiveProps(nextProps){
        if(nextProps.user.code === 0&& nextProps.user.data.uid&&!nextProps.carts.data){//用户登录，获取购物车信息
            this.props.dispatch( fetchCarts() );
        }
    }

    caculatePrice(){
        let price = 0;
        if(this.props.carts.data){
            price = this.props.carts.data.reduce( (accumulator,currentValue)=>{
                return accumulator + currentValue.quantity*(currentValue.price/100)
            },0 )
        }
        return price.toFixed(2);
    }

    deleteItem(id){
        this.props.dispatch( deleteToCart(id) ).then( res =>{
            this.props.dispatch( fetchCarts() );
        } );
    }

    viewCarts(){
        if(this.props.user.code === 0&& this.props.user.data.uid &&this.props.carts.data&&this.props.carts.data.length){//用户登录，获取购物车信息 且购物车有商品
            return (
                <div className="full">
                    <div className="nav-cart-items">
                        <ul>
                            {this.props.carts.data&&this.props.carts.data.map( item => {
                                return (
                                    <li key={item.itemId}
                                        className="clear">
                                        <div className="cart-item js-cart-item cart-item-sell">
                                            <div className="cart-item-inner">
                                                <div className="item-thumb">
                                                    <img src={item.cover} alt='img' />
                                                </div>
                                                <div className="item-desc">
                                                    <div className="cart-cell">
                                                        <h4>
                                                            <Link to={'/detail/'+item.itemId}>{item.title}</Link>
                                                        </h4>
                                                        <p className="attrs">
                                                            <span>{item.name}</span>
                                                        </p>
                                                        <h6>
                                                            <span className="price-icon">¥</span><span className="price-num">{(item.price/100).toFixed(2)}</span><span className="item-num">x {item.quantity}</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div onClick={this.deleteItem.bind(this,item.id)}
                                                    className="del-btn"
                                                >删除</div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            } )}
                        </ul>
                    </div>
                    <div className="nav-cart-total">
                        <p>共 <strong className="ng-binding">{this.props.carts.data&&this.props.carts.data.length}</strong> 件商品</p>
                        <h5>合计：<span className="price-icon">¥</span><span className="price-num ng-binding" >{this.caculatePrice()}</span></h5>
                        <h6>
                            <Link  className="nav-cart-btn" to="/cart">去购物车</Link>
                        </h6>
                        </div>
                </div>
            );
        }
        return (
            <div className="empty">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
        )
    }

    render(){
        return(
            <li className="nav-cart">
                <a href=" ">购物车</a>
                <span className="cart-empty-num cart-num">
								<i>{this.props.carts.data&&this.props.carts.data.length}</i>
							</span>
                <div className="nav-cart-wrapper">
                    <div className="nav-cart-list">
                        {this.viewCarts()}
                    </div>
                </div>
            </li>
        );
    }
}

export default connect(state=> {
    return ({
        carts: state.cartReducers,
        user: state.userReducers
    });
})(CartHeader);