import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore'

function Nodebird({Component}) {
    return (
        <>
            <div>공통공통</div>
            <Component/>
        </>  
    );
}

Nodebird.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default wrapper.withRedux(Nodebird);
