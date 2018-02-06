import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {fetchAddress} from "../../actions/user";
import {verify} from "../../actions/verify";
import {editAddress,setDefault,addAddress} from '../../actions/user/index';

class EditAddress extends Component {
    constructor(props){
        super(props);
        let index = this.props.match.params.index;
        let address = this.props.address;
        if(!this.props.user.data){
            this.props.dispatch( verify() );
        }
        if(index === 'undefined'){
            this.state = {
                address: [
                    {
                        id: 1,
                        areaCode:"",
                        city:"",
                        district:"",
                        phone:"",
                        province:"",
                        street:"",
                        telephone:"",
                        userName:""
                    }
                ],
                index: 0,
                isAdding: true
            };
        }else{
            if(!address[0].userName){
                this.props.dispatch( fetchAddress(this.props.user.data.id) );
                index = 0;
            }
            this.state = {
                address,
                index
            };
        }

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            address: nextProps.address
        });
    }

    checkValue(){
        return Object.values(this.state).find( item => !item )
    }

    change(val,e){
        let address = [...this.state.address];
        address[this.state.index][val] = e.target.value;
        this.setState({
            address
        })
    }

    editAddress(id){
        if(this.state.isAdding){
            this.props.dispatch( addAddress(this.state.address[this.state.index]) ).then( res => {
                this.props.dispatch( fetchAddress(this.props.user.data.id) );
                this.props.dispatch( setDefault(res.data.id) );
            } ).then( res => {
                this.props.history.goBack();
            } );
        }else{
            this.props.dispatch( editAddress(this.state.address[this.state.index]) ).then( res => {
                this.props.dispatch( fetchAddress(this.props.user.data.id) );
                this.props.dispatch( setDefault(id) );
            } ).then( res => {
                this.props.history.goBack();
            } );
        }

    }

    back(){
        this.props.history.goBack();
    }

    changeDefault(item){
        item.isDefault = !item.isDefault;
        this.setState({
            address: [...this.state.address,item]
        });
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
                            <span onClick={this.back.bind(this)}
                                className="dialog-close"
                            >x</span>
                        </div>
                        <div className="dialog-con js-dialog-container">
                            <div className="animate-layer">
                                <div className="dialog-inner js-address-add">
                                    <div className="save-address-box">
                                        <div className="address-form">
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'userName')}  value={this.state.address[this.state.index].userName}  placeholder={'收货人姓名'}/>
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'phone')} value={this.state.address[this.state.index].phone} placeholder={'手机号'} />
                                                    <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 area-code-w fn-left form-valid-item">
                                                    <i></i>
                                                    <input type="text" className="js-verify js-address-area-code" onChange={this.change.bind(this,'areaCode')} value={this.state.address[this.state.index].areaCode}  placeholder={'区号（可选）'} />
                                                        <div className="verify-error"> </div>
                                                </div>
                                                <div className="form-item-v3 telephone-w fn-right form-valid-item">
                                                    <i></i>
                                                    <input type="text" className="js-verify js-address-telephone" onChange={this.change.bind(this,'telephone')} value={this.state.address[this.state.index].telephone} placeholder={'固定电话（可选）'}/>
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item province-wrapper">
                                                    <select name="province_code" className="province select-province js-form-province js-verify" onChange={this.change.bind(this,'province')} value={this.state.address[this.state.index].province}>
                                                        <option value="">请选择省份</option>
                                                        <option value="北京市">北京市</option>
                                                        <option value="广东省">广东省</option>
                                                        <option value="上海市">上海市</option>
                                                        <option value="江苏省">江苏省</option>
                                                        <option value="浙江省">浙江省</option>
                                                        <option value="山东省">山东省</option>
                                                        <option value="河南省">河南省</option>
                                                        <option value="四川省">四川省</option>
                                                        <option value="河北省">河北省</option>
                                                        <option value="湖北省">湖北省</option>
                                                        <option value="安徽省">安徽省</option>
                                                        <option value="福建省">福建省</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="module-form-row clear">
                                                <div className="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                                    <select className="city select-city js-form-city js-verify"
                                                            onChange={this.change.bind(this,'district')}
                                                            value={this.state.address[this.state.index].district}
                                                    >
                                                        <option value="">请选择城市</option>
                                                        <option value="闵行区">闵行区</option>
                                                        <option value="海淀区">海淀区</option>
                                                    </select>
                                                </div>
                                                <div className="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                                    <select className="city select-city js-form-city js-verify"
                                                            onChange={this.change.bind(this,'city')}
                                                            value={this.state.address[this.state.index].city}
                                                    >
                                                        <option value="">请选择区县</option>
                                                        <option value="七宝">七宝</option>
                                                        <option value="中关村">中关村</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="module-form-row">
                                                <div className="form-item-v3">
                                                    <i></i>
                                                    <input type="text" className="js-verify" onChange={this.change.bind(this,'street')} value={this.state.address[this.state.index].street} placeholder={'详细地址，如街道名称，楼层，门牌号码等'} />
                                                        <div className="verify-error"> </div>
                                                </div>
                                            </div>
                                            <div className="module-form-row fn-clear">
                                                <input type="checkbox" className="hide"/>
                                                    <span onClick={this.changeDefault.bind(this,this.state.address[this.state.index])}
                                                        className={['blue-checkbox',this.state.address[this.state.index].isDefault?'blue-checkbox-on':""].join(' ')}> </span>设为默认
                                            </div>
                                            <div onClick={this.editAddress.bind(this,this.state.address[this.state.index].id)}
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
    address:[{
        areaCode:"",
        city:"",
        district:"",
        phone:"",
        province:"",
        street:"",
        telephone:"",
        userName:""
    }]
};

EditAddress.propTypes = {
    address: PropTypes.array
};

export default connect(state => {
    return ({
        user: state.userReducers,
        address: state.addressReducers.data
    });
})(EditAddress);