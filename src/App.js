import React from 'react';
import './vendor/bootstrap-v4/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/simple-line-icons/css/simple-line-icons.css';
import './vendor/devicons/css/devicons.min.css';
import 'mdbreact/dist/css/mdb.css';
import './vendor/font-awesome-4.7.0/css/font-awesome.min.css';
import routes from './routes/routes';

import './app.scss';

const App = () => (
    <div>
        {routes}
    </div>
);

// App.propTypes = {
//     history       : PropTypes.object.isRequired,
// };

export default App;
