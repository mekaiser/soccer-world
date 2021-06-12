import React from 'react';

const NotFound = () => {
    const notFound = {color: 'white', textAlign: 'center'}
    return (
        <div style={{paddingTop: '20em', paddingBottom: '30em'}}>
            <h1 style={notFound}>Oops, invalid URL!</h1>
        </div>
    );
};

export default NotFound;