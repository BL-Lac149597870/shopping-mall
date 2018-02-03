import React,{Component} from 'react';



class AddressItem extends Component {

    render(){
        return (
            <li className="js-choose-address  selected-address-item">
                <div className="address-item">
                    <div className="name-section">{this.props.item.username}</div>
                    <div className="mobile-section">{this.props.item.telephone}</div>
                    <div className="detail-section"> {this.props.item.province} {this.props.item.city} {this.props.item.district}<br/> {this.props.item.street} </div>
                </div>
                <div className="operation-section">
                    <span className="update-btn js-edit-address">修改</span>
                    <span className="delete-btn js-delete-address">删除</span>
                </div>
            </li>
        );
    }
}

export default AddressItem;