import React,{Component} from 'react';

import {fetchCarts,addItemToCart,deleteToCart,changeChecked} from '../../actions/cart/index';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CartItem extends Component {

    addItemToCart(id,number){
        this.props.dispatch( addItemToCart(id,number) ).then( res => {
            this.props.dispatch(fetchCarts());
        } );
    }

    deleteItem(id){
        this.props.dispatch( deleteToCart(id) ).then( res =>{
            this.props.dispatch( fetchCarts() );
        } );
    }

    changeChecked(id,checked){
        this.props.dispatch( changeChecked(id,!checked) ).then( res =>{
            this.props.dispatch( fetchCarts() );
        } );
    }

    changeValue(){
        
    }

    render(){
        return (
            <div className="cart-top-items">
                <div className="cart-items">
                    <div className="items-choose">
                        <span onClick={this.changeChecked.bind(this,this.props.item.id,this.props.item.checked)}
                            className={['blue-checkbox-new',this.props.item.checked?'checkbox-on':''].join(' ')}
                        ><a> </a></span>
                    </div>
                    <div className="items-thumb">
                        <img src={this.props.item.cover} alt='cover'/>
                        <Link to={"/detail/" + this.props.item.itemId} />
                    </div>
                    <div className="name hide-row" >
                        <div className="name-table">
                            <Link to={"/detail/" + this.props.item.itemId} >{this.props.item.title}</Link>
                            <ul className="attribute">
                                <li>{this.props.item.name}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="operation">
                        <a onClick={this.deleteItem.bind(this,this.props.item.id)}
                            className="items-delete-btn"
                        > </a>
                    </div>
                    <div className="subtotal">¥ {(this.props.item.price*this.props.item.quantity/100).toFixed(2)}</div>
                    <div className="item-cols-num">
                        <div className="select js-select-quantity">
                            <span className="down down-disabled">-</span>
                            <span className="num">
                                <input type="text" style={{display: "inline-block"}} onChange={this.changeValue.bind(this)} value={this.props.item.quantity} />
                            </span>
                            <span onClick={this.addItemToCart.bind(this,this.props.item.itemId,1)}
                                className="up"
                            >+</span>
                        </div>
                    </div>
                    <div className="price">¥ {(this.props.item.price/100).toFixed(2)}</div>
                </div>
            </div>
        );
    }
}

export default connect()(CartItem);