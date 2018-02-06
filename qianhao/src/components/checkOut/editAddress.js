import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import '../../assets/css/address-pop.css';


class EditAddress extends Component {
    constructor(props){
        super(props);
        let index = this.props.match.params.index;
        let address = {
            id: this.props.address.length
        };
        if(index !== 'undefined'){
            address = this.props.address;
        }
        this.state = {
            ...address,
            savable: false
        };
    }

    checkValue(){
        return Object.values(this.state).find( item => !item )
    }

    change(val,e){
        this.setState({
            [val]: e.target.value
        })
    }

    editAddress(){

    }

    componentWillUpdate(nextProps, nextState){
        nextState.savable = !this.checkValue();
    }

    render(){
        return (
            <div id="pop">
                <div className="module-dialog-layer" style={{display: 'block'}}> </div>
                <div className="module-dialog clear module-dialog-address module-dialog-show">
                    <div className="dialog-panel">
                        <div className="topbar">
                            <div className="dialog-tit clear">
                                <h4 className="js-dialog-title">管理收货地址</h4>
                            </div>
                            <span className="dialog-close">x</span>
                        </div>
                        <div className="dialog-con js-dialog-container">
                            <div className="animate-layer">
                                <div className="dialog-inner js-address-add">
                                    <div className="save-address-box">
                                        <div className="address-form">
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'userName')}  value={this.state.userName}  placeholder={'收货人姓名'}/>
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'phone')} value={this.state.phone} placeholder={'手机号'} />
                                                    <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 area-code-w fn-left form-valid-item">
                                                    <i></i>
                                                    <input type="text" className="js-verify js-address-area-code" onChange={this.change.bind(this,'areaCode')} value={this.state.areaCode}  placeholder={'区号（可选）'} />
                                                        <div className="verify-error"> </div>
                                                </div>
                                                <div className="form-item-v3 telephone-w fn-right form-valid-item">
                                                    <i></i>
                                                    <input type="text" className="js-verify js-address-telephone" onChange={this.change.bind(this,'telephone')} value={this.state.telephone} placeholder={'固定电话（可选）'}/>
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item province-wrapper">
                                                    <select name="province_code" className="province select-province js-form-province js-verify">
                                                        <option value="0">请选择省份</option>
                                                        <option value="110000">北京市</option>
                                                        <option value="440000">广东省</option>
                                                        <option value="310000">上海市</option>
                                                        <option value="320000">江苏省</option>
                                                        <option value="330000">浙江省</option>
                                                        <option value="370000">山东省</option>
                                                        <option value="410000">河南省</option>
                                                        <option value="510000">四川省</option>
                                                        <option value="130000">河北省</option>
                                                        <option value="420000">湖北省</option>
                                                        <option value="340000">安徽省</option>
                                                        <option value="350000">福建省</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                                    <select className="city select-city js-form-city js-verify">
                                                        <option value="0">请选择城市</option>
                                                        <option value="1">闵行区</option>
                                                        <option value="2">海淀区</option>
                                                    </select>
                                                </div>
                                                <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                                    <select className="city select-city js-form-city js-verify">
                                                        <option value="0">请选择区县</option>
                                                        <option value="1">七宝</option>
                                                        <option value="2">中关村</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'street')} value={this.state.street} placeholder={'详细地址，如街道名称，楼层，门牌号码等'} />
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row fn-clear">
                                                <input type="checkbox" className="hide"/>
                                                    <span className="blue-checkbox"> </span>设为默认
                                            </div>
                                            <div onClick={this.editAddress.bind(this)}
                                                className={['dialog-blue-btn big-main-btn js-verify-address',this.state.savable?'':'disabled-btn'].join(' ')}>
                                                <a>保存</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditAddress.defaultProps = {
    address:[]
};

EditAddress.propTypes = {
    address: PropTypes.array
};

export default connect(state => {
    return ({
        address: state.addressReducers.data
    });
})(EditAddress);