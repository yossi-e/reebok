import React, { Component } from 'react';
import './StoreHeader.scss';

class StoreHeader extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="time-to-run-wrap">
                    <div className="time-to-run">
                        {`זה הזמן לרוץ
                        הכי מהר שאפשר`}
                    </div>
                    <div className="now-in-stores"
                    //  dangerouslySetInnerHTML={{
                    //     __html:
                    //         `עכשיו בחנויות <div class="reebok"></div> , <div class="mega"></div>
                    //         וחנויות הספורט הנבחרות ברחבי הארץ`
                    // }}
                    >
                    עכשיו בחנויות <div className="reebok"></div> , <div className="mega"></div> וחנויות הספורט הנבחרות ברחבי הארץ
                    </div>
                </div>
            </div>
        );
    }
}

export default StoreHeader;