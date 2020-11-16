import React from 'react'
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

function App({Component}) {
    return (
        <>
            <div>공통공통</div>
            <Component/>
        </>  
    );
}

App.PropTypes = {
    Component: PropTypes.elementType.isRequired
}

export default App;
