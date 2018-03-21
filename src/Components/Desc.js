import React, { Component } from 'react';
import './Desc.scss';

class Desc extends Component {

    render() {
        return (
            <div>
                <div className="desc">
                    <div className="know">הכירו את</div>
                    <div className="impact">Fast Flexweave</div>
                    <div className="desc-text">
                        <div className="desc-text-in">
                            {`טכניקת סריגה ייחודית לאחיזה מקסימלית של כף הרגל, ובמשקל של 240 גרם היא תגרום לכם להרגיש כאילו נעלתם כנפיים

    המתאמנים של היום הם אתלטיים לאורך כל היום – מעוניינים במוצר שיספק את צריכהם גם באימון וגם מחוצה לו. הנעליים מיועדות לפעיליות מגוונות ורבות, הנעל מספקת יציבות, גמישות ותמיכה מלאה לכף הרגל בכל מצב.

    הנעלים עוצבו במטרה להעלות את רמת הדיוק בכל אימון , בשילוב אמירה אופנתית וסטייל. הנעליים מתאימות לאימון בחדר כושר , סטודיו ולריצה עד 5 קילומטר.`}
                        </div>
                        <div className="shoe-wrap">
                            <div className="shoe"></div>
                            <div className="red-box"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Desc;