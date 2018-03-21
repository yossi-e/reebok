import React, { Component } from 'react';
import './CityList.scss';
import CityItem from './CityItem';
import stores from './stores.json';
import { push } from "./services/Analytics";

class CityList extends Component {
    constructor() {
        super();
        this.state = {
            storeData: {},
            tableActive: false,
        }

        this.toggleTable = this.toggleTable.bind(this);
    }
    componentDidMount() {
        this.initStoreList();
    }
    initStoreList() {
        let result = {};
        stores.forEach(item => {
            let currentResultItem = result[item.city];
            if (currentResultItem)
                currentResultItem.branches.push(item);
            else
                result[item.city] = { branches: [item] };
        });

        this.setState({
            storeData: result
        });
    }
    loadData() {
        return Object.keys(this.state.storeData).map((item, index) =>
            <CityItem
                key={index}
                cityName={item}
                branches={this.state.storeData[item].branches}
            />);
    }

    toggleTable() {
        this.setState({
            tableActive: !this.state.tableActive
        },
            this.scrollToTable
        );
    }

    scrollToTable() {
        if (this.state.tableActive) {
            let height = document.getElementsByClassName("all-stores")[0].offsetTop;
            window.scrollTo(0, height);
            push('Button_Clicked','Open');
        }
        
        else{
            push('Button_Clicked','Closed');
        }
    }

    render() {
        return (
            <div>
                <div className="all-stores-wrap">
                    <button type="button" className={'all-stores btn' + (this.state.tableActive ? " active" : "")} onClick={this.toggleTable}>לרשימת החנויות</button>
                </div>
                <div className={'store-table' + (this.state.tableActive ? " active" : "")}>
                    <div className="table-row">
                        <div className="branch-name">שם הסניף</div>
                        <div className="branch-details">כתובת</div>
                    </div>
                    {this.loadData()}
                </div>
            </div>
        );
    }
}

export default CityList;