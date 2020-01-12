import React from 'react';

export default ({setPageIndex}) => {
    return(
        <div>
            <button onClick={() => setPageIndex(0)}>Get Quote</button>
            <button onClick={() => setPageIndex(1)}>Enter Quote</button>
            <button onClick={() => setPageIndex(2)}>Saved Quotes</button>
        </div>
    )
}