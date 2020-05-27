import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/pl';
import App from 'components/App';
import 'normalize.min.css';
import 'index.css';
import './icons';

moment.locale('pl');

ReactDOM.render(<App />, document.getElementById('root'));
