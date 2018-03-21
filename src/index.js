import React from 'react';
import ReactDOM from 'react-dom';
import './static/site.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
