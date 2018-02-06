import React, {Component} from 'react';

import '../../assets/css/payment.css';

class Payment extends Component {
    render(){
        return (
            <div id="main">
                <div className="content page-order-payment">
                    <div className="gray-box clear">
                        <div className="title">
                            <h2>支付订单</h2>
                        </div>
                        <div className="box-inner order-info">
                            <h3>提交订单成功</h3>
                            <p className="payment-detail">请在 <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
                            <p className="payment-detail">我们将在您完成支付后的 72 小时内发货</p>
                        </div>
                        <div className="box-inner payment-checkout-panel clear">
	    	            <span className="jianguo-blue-main-btn big-main-btn js-payment-order">
	    	                <a>现在支付</a>
	    	            </span>
                            <span className="prices"> 应付金额：   <em><span>¥ </span>199.00</em>   </span>
                        </div>
                    </div>
                    <div className="confirm-detail">
                        <div className="info-title">订单编号</div>
                        <p className="info-detail">170620718648448</p>
                    </div>
                    <div className="confirm-detail">
                        <div className="info-title">收货信息</div>
                        <p className="info-detail">姓名：王某某</p>
                        <p className="info-detail">联系电话：13811111111</p>  <p className="info-detail">详细地址：北京市市辖区海淀区上地十街辉煌国际西6号楼319室</p>
                    </div>
                    <div className="confirm-detail">
                        <div className="info-title">发票信息</div>
                        <p className="info-detail">发票类型：电子发票</p>
                        <p className="info-detail">发票抬头：个人</p>
                        <p className="info-detail">发票内容：购买商品明细</p>
                    </div>
                    <div className="confirm-table-title clear">
                        <span className="name fn-left">商品信息</span>
                        <span className="subtotal fn-right">小计</span>
                        <span className="num fn-right">数量</span>
                        <span className="price fn-right">单价</span>
                    </div>
                    <div className="confirm-goods-table">
                        <div className="cart-items clear">
                            <div className="name fn-left hide-row">
                                <div className="name-cell">
                                    <a href="http://www.smartisan.com/shop/#/item/100029901" title="Smartisan 快充移动电源 10000mAh（灰色）" target="_blank">Smartisan 快充移动电源 10000mAh（灰色）</a><br/>
                                </div>
                            </div>
                            <div className="subtotal fn-right">
                                <div className="subtotal-cell">¥ 199.00</div>
                            </div>
                            <div className="goods-num fn-right">1</div>
                            <div className="price fn-right">¥ 199.00</div>
                        </div>
                        <div className="cart-items clear">
                            <div className="name fn-left hide-row">
                                <div className="name-cell">
                                    <a href="http://www.smartisan.com/shop/#/item/100029901" title="Smartisan 快充移动电源 10000mAh（灰色）" target="_blank">Smartisan 快充移动电源 10000mAh（灰色）</a><br/>
                                </div>
                            </div>
                            <div className="subtotal fn-right">
                                <div className="subtotal-cell">¥ 199.00</div>
                            </div>
                            <div className="goods-num fn-right">1</div>
                            <div className="price fn-right">¥ 199.00</div>
                        </div>
                    </div>
                    <div className="order-discount-line">
                        <p> 商品总计： <span>¥ 199.00</span> </p>
                        <p> 运费： <span>+ ¥ 0.00</span> </p>
                    </div>
                </div>
            </div>

    );
    }
}

export default Payment;