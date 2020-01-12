import React from 'react';

export default (props) =>{
    return(
        
    <div style={{background:'purple'}}>
        <h1>Saved Quotes Page</h1>
        {/* could use foreach but this is an efficient way to create codeblocks with inputted quotes */}
        {props.savedQuotes.map(quote => (
             <div style={{background: 'lightgrey', margin:'10px'}}>
                <p>{quote.text}</p>
                <p>-- {quote.author}</p>
             </div>
        ))}


       
    </div>

)
}