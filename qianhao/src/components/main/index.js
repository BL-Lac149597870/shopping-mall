import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItemToCart,fetchCarts} from '../../actions/cart/index';


class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    /**
     * 改变选中颜色
     * @param index
     */
    changeCurrentIndex(index){
        this.setState({
            currentIndex: index
        });
    }

    addItemToCart(id){
        this.props.dispatch( addItemToCart(id,1) ).then( res => {
            this.props.dispatch(fetchCarts());
        } );
    }

    render(){
        return (
            <div className="item">
                <div>
                    <div className="item-img"><img alt="cover" src={this.props.data.children[this.state.currentIndex].cover} style={{opacity: 1}}/>
                    </div>
                    <h6>{this.props.data.title}</h6>
                    <h3>{this.props.data.subTitle}</h3>
                    <div className="params-colors">
                        <ul className="colors-list">
                            {
                                this.props.data.children.map( (item,index) => {
                                    return (
                                        <li
                                            onMouseOver={this.changeCurrentIndex.bind(this,index)}
                                            key={item.id}
                                        >
                                            <a href="" className={index === this.state.currentIndex?'active':''}>
                                                <img src={item.color}  alt={item.name}/>
                                            </a>
                                        </li>
                                    );
                                } )
                            }
                        </ul>
                    </div>
                    <div className="item-btns clearfix">
                        <span className="item-gray-btn"><Link to={'/detail/'+this.props.data.children[this.state.currentIndex].id} >查看详情</Link> </span>
                        <span onClick={this.addItemToCart.bind(this,this.props.data.children[this.state.currentIndex].id)}
                            className="item-blue-btn"
                        >加入购物车 </span>
                    </div>
                    <div className="item-price clearfix">
                        <i>¥</i><span>{(this.props.data.children[this.state.currentIndex].price/100).toFixed(2)}</span>
                    </div>
                    <div className="discount-icon">false</div>
                    <div className="item-cover">
                        <Link to={'/detail/'+this.props.data.children[this.state.currentIndex].id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Item);






