import React from 'react';

export default ({setPageIndex}) => {
    return(
        <div className='nav'>
            <button className='navButton' onClick={() => setPageIndex(0)}>Get Quote</button>
            <button className='navButton' onClick={() => setPageIndex(1)}>Enter Quote</button>
            <button className='navButton' onClick={() => setPageIndex(2)}>Saved Quotes</button>
        </div>
    )
}