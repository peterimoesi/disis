import React from 'react';
import 'mdbreact/dist/css/mdb.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import routes from './routes/routes';

const App = () => (
    <div>
        {routes}
    </div>
);

// App.propTypes = {
//     history       : PropTypes.object.isRequired,
// };

export default App;
