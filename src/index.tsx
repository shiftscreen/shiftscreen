import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'normalize.min.css';
import 'index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faThLarge, faFolder } from '@fortawesome/free-solid-svg-icons';
library.add(faDesktop, faThLarge, faFolder);

ReactDOM.render(<App />, document.getElementById('root'));
