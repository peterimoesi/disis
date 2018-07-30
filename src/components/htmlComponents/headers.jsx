import React from 'react';

import PropTypes from 'prop-types';

import './headers.scss';'';

const headers = ({ type, klass, children }) => {
    switch (type) {
    case 'h4':
        return <h4 className={klass}>{children}</h4>;
    case 'h2':
        return <h2 className={klass}>{children}</h2>;
    default:
        return null;
    }
    // 
};

headers.propTypes = {
    type : PropTypes.string.isRequired,
    klass : PropTypes.string,
    children : PropTypes.object.isRequired
};

headers.defaultProps = {
    klass : ''
};

export default headers;
