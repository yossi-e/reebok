import React, { Component } from 'react';
import './Title.scss';

class Title extends Component {
    render() {
        return (
            <div className="main-title">
                <div className="main-title-reebok"></div>
                <div>{`נוחות, גמישות ויציבות
                    הם רק חלק מחוקי המשחק כשזה מגיע לריצה.`}</div>
            </div>
        );
    }
}

export default Title;