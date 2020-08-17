import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import 'normalize.min.css';
import 'react-app-polyfill/ie11';

import App from 'components/App';
import 'index.css';
import './icons';

import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import dayOfYear from 'dayjs/plugin/dayOfYear';
dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(dayOfYear);
dayjs.locale('pl');

ReactDOM.render(<App/>, document.getElementById('root'));
