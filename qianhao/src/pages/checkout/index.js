import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAddress} from "../../actions/user";
import {verify} from "../../actions/verify";
import {Link} from 'react-router-dom';

import AddressItem from '../../components/checkOut/adressList';

import '../../assets/css/address-pop.css';
import '../../assets/css/checkout.css';

class CheckOut extends Component {

    componentDidMount(){
        this.props.dispatch( verify() ).then( res => {
            this.props.dispatch( fetchAddress(this.props.user.data.id) );
        } );
    }

    render(){
        return (
            <div className="content page-order-checkout checkout">
                <div className="js-checkout-address-box">
                    <div className="gray-box clear">
                        <div className="title columns-title pre-title">
                            <h2>收货信息</h2>
                        </div>
                        <div className="box-inner js-checkout-address-panel ">
                            <div className="address-common-table js-multiple-address-panel">
                                <ul className="address-item-list clear js-address-item-list">
                                    {this.props.address.data&&this.props.address.data.map( (item,index) => <AddressItem key={index} item={item} index={index} /> )}
                                    <li className="add-address-item js-add-address">
                                        <Link to={"/editAddress/" + this.props.index}>
                                            <p>使用新地址</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gray-box">
                    <div className="title">
                        <h2>发票信息</h2>
                    </div>
                    <div className="box-inner invoice-box js-invoice-box">
                        <p className="invoice-detail"> 发票类型：电子发票 </p>
                        <div className="invoice-detail"> 发票抬头：
                            <div className="radio-box">
                                <label>
                                    <input type="radio" className="hide"/>
                                        <span className="blue-radio blue-radio-on"><a> </a></span>  个人
                                </label>
                                <label>
                                    <input type="radio" className="hide"/>
                                        <span className="blue-radio"><a> </a></span>  单位
                                </label>
                            </div>
                            <div className="module-form-row form-item fn-hide js-invoice-title">
                                <div className="module-form-item-wrapper no-icon small-item">
                                    <i>请填写公司发票抬头</i>
                                    <input type="text" className="js-verify"/>
                                </div>
                            </div>
                        </div>
                        <p className="invoice-detail">发票内容：购买商品明细</p> <p className="invoice-label"> 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 </p>
                    </div>
                </div>
                <div className="gray-box">
                    <div className="title pre-title">
                        <h2>购物清单</h2>
                    </div>
                    <div className="box-inner ui-goods-cart">
                        <div className="gray-sub-title cart-table-title">
                            <span className="name">商品名称</span>
                            <span className="subtotal">小计</span>
                            <span className="num">数量</span>
                            <span className="price">单价</span>
                        </div>
                        <div className="cart-table">
                            <div className="cart-group js-cart-group">
                                <div className="cart-items">
                                    <div className="items-thumb">
                                        <a href="javascript:void(0);" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/></a>
                                    </div>
                                    <div className="name hide-row">
                                        <div className="name-cell">
                                            <a href="javascript:void(0);" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）" target="_blank">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <div className="subtotal-cell">  ¥ 49.00  </div>
                                    </div>
                                    <div className="goods-num">1</div>
                                    <div className="price">¥ 49.00</div>
                                </div>
                                <div className="cart-items">
                                    <div className="items-thumb">
                                        <a href="javascript:void(0);" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/></a>
                                    </div>
                                    <div className="name hide-row">
                                        <div className="name-cell">
                                            <a href="javascript:void(0);" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）" target="_blank">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <div className="subtotal-cell">  ¥ 49.00  </div>
                                    </div>
                                    <div className="goods-num">1</div>
                                    <div className="price">¥ 49.00</div>
                                </div>
                                <div className="cart-items">
                                    <div className="items-thumb">
                                        <a href="javascript:void(0);" target="_blank"><img src="http://image.smartisanos.cn/resource/3802197aa7e78f9429eb5f6048a25047.jpg?x-oss-process=image/resize,w_80/quality,Q_100/format,webp"/></a>
                                    </div>
                                    <div className="name hide-row">
                                        <div className="name-cell">
                                            <a href="javascript:void(0);" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）" target="_blank">坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）</a>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <div className="subtotal-cell">  ¥ 49.00  </div>
                                    </div>
                                    <div className="goods-num">1</div>
                                    <div className="price">¥ 49.00</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="box-inner">
                        <div className="order-discount-line">
                            <p> 商品总计： <span>¥ 297.00</span> </p>
                            <p> 运费： <span>+ ¥ 0.00</span> </p>
                            <p className="discount-line js-discount-cash"> <em>现金券</em>： <span> - 0 </span> </p>
                        </div>
                    </div>
                    <div className="box-inner">
                        <div className="last-payment clear">
                            <span className="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"> <Link to={'/payment'}>提交订单</Link> </span> <span className="prices fn-right">应付金额： <em>¥ 297.00</em></span>
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default connect(state=>{
    return ({
        user: state.userReducers,
        address: state.addressReducers
    });
})(CheckOut);