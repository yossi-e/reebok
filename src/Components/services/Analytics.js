import { TestingZone } from "./baseURL"

const Category = "reebok";

const push = (action, label) => {
    var data = {
        'event': 'GA_Event',
        'Category': Category,
        'Action': action,
        'Label': label
    };
    if (window.dataLayer) {
        window.dataLayer.push(data);
    }
    if (TestingZone().isLocalhost || TestingZone().isQA) {
        console.log(data);
    }
}

export {
    push
}