import React, {Component} from 'react';
import '../../assets/css/goodsList.css';

import Item from '../../components/main/index';

import {connect} from 'react-redux';
import {updateItems} from "../../actions/updateItems";

class Main extends Component {
    componentDidMount(){
        if(!this.props.items.length) {
            this.props.dispatch( updateItems() );
        }
    }

    render(){
        let items = this.props.items.filter(item => item.pid === 0);
        items.forEach(item => {
            item.children = this.props.items.filter(sitem => sitem.pid === item.id)
        });

        return (
            <div className="sku-box store-content">
                <div className="sort-option">
                    <ul className="line clear">
                        <li><a href="" className="active">综合排序</a></li>
                        <li><a href="" className="">销量排序</a></li>
                        <li><a href="" className="">价格低到高</a></li>
                        <li><a href="" className="">价格高到低</a></li>
                    </ul>
                </div>
                <div className="gray-box">
                    <div className="item-box">
                        {
                            items.map( item =>{
                                return (
                                    <Item data={item} key={item.id} />
                                );
                            } )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state=>{
    return ({
        items: state.mainReducers
    });
})(Main);