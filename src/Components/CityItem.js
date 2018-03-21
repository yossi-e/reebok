import React, { Component } from 'react';

class CityItem extends Component {
    constructor(props) {
        super();
        this.state = {}
    }
    getBranches() {
        return this.props.branches.map((item, index) =>
            <div className="table-row" key={index}>
                <div className="branch-name">{item.branch}</div>
                <div className="branch-details">
                    <span>{item.address}</span>
                    <span className="phone">{item.phone}</span>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="city-items">
                <div className="table-row-header">
                    {this.props.cityName}
                </div>
                <div className="city-branches">
                    {this.getBranches()}
                </div>
            </div>
        );
    }
}

export default CityItem;