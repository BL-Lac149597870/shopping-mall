import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../../assets/css/detail.css';

import {updateItems} from '../../actions/updateItems/index';
import {addItemToCart, fetchCarts} from "../../actions/cart/index";


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
            number:1
        };
    }
    componentDidMount(){
        if(!this.props.items.length) {
            this.props.dispatch( updateItems() );
        }
    }
    componentWillReceiveProps(){
        this.setState({
            currentIndex: 0,
            number:1
        });
    }

    changeCurrentIndex(i){
        this.setState({
            currentIndex:i
        });
    }

    mapPictures(item,index){
        if(item){
            return item.album.map( (sitem,i) => {
                return (
                    <li
                        onMouseOver={this.changeCurrentIndex.bind(this,i)}
                        key={i}
                        className={i === index ? 'on' : ''}
                    ><img src={item.album[i]} alt='album' /></li>
                );
            });
        }
    }

    mapColors(siblings){
        return siblings.map( (sitem,i) => {
            let index = Number(this.props.match.params.id);
            return (
                <li
                    key={i}
                    className={ sitem.id === index?'cur':'' }>
                    <Link to={'/detail/' + sitem.id}><i>
                        <img src={sitem.color} alt='color'/>
                    </i></Link>
                </li>
            );
        });
    }

    minus(){
        let number = this.state.number - 1;
        number = number<1?1:number;
        this.setState({
            number
        });
    }

    plus(){
        let number = this.state.number + 1;
        // number = number<1?1:number;
        this.setState({
            number
        });
    }

    addItemToCart(id,number){
        this.props.dispatch( addItemToCart(id,number) ).then( res => {
            this.props.dispatch(fetchCarts());
            this.setState({
                number: 1
            });
        } );
    }

    render(){
        let id = Number(this.props.match.params.id);
        let item = this.props.items.find( item => item.id === id );
        let parent = this.props.items.find( sitem => sitem.id === item.pid);
        let siblings = this.props.items.filter( sitem => sitem.pid === item.pid);
        return (
            <div className="store-content item">
                <div className="item-box">
                    <div className="gallery-wrapper">
                        <div className="gallery">
                            <div className="thumbnail">
                                <ul>
                                    {this.mapPictures(item,this.state.currentIndex)}
                                </ul>
                            </div>
                            <div className="thumb">
                                <ul>
                                    <li className="on"><img src={item&&item.album[this.state.currentIndex]} alt='album'/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="sku-custom-title">
                            <div className="params-price">
                                <span><em>¥</em><i>{item?(item.price/100).toFixed(2):''}</i></span>
                            </div>
                            <div className="params-info">
                                <h4>{parent&&parent.title}</h4>
                                <h6>{parent&&parent.subTitle}</h6>
                            </div>
                        </div>
                        <div className="sku-dynamic-params-panel">
                            <div className="sku-dynamic-params clear">
                                <span className="params-name">颜色</span>
                                <ul className="params-colors">
                                    {this.mapColors(siblings)}
                                </ul>
                            </div>
                        </div>
                        <div className="sku-dynamic-params clear">
                            <div className="params-name">数量</div>
                            <div className="params-detail clear">
                                <div className="item-num js-select-quantity">
                                    <span onClick={this.minus.bind(this)}
                                        className={["down",this.state.number<=1?"down-disabled":""].join(" ")}
                                    >-</span>
                                    <span className="num">{this.state.number}</span>
                                    <span onClick={this.plus.bind(this)}
                                        className="up">+</span>
                                </div>
                            </div>
                        </div>
                        <div className="sku-status">
                            <div className="cart-operation-wrapper clearfix">
                                <span onClick={this.addItemToCart.bind(this,id,this.state.number)}
                                    className="blue-title-btn js-add-cart">
                                    <a href='javascript:void(0);'>
                                        加入购物车
                                    </a></span>
                                <span className="gray-title-btn"><Link to='/checkout'>现在购买</Link></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(state => {
    return ({
        items: state.mainReducers
    });
})(Detail);