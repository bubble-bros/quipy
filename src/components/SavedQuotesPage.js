import React, {useState, useEffect} from 'react';

export default (props) =>{
    const [displayedQuotes, setDisplayedQuotes] = useState(props.savedQuotes);
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    
    useEffect(() => {
        setDisplayedQuotes(props.savedQuotes.filter((quote) => 
        (quote.text.toLowerCase().includes(searchText.toLowerCase()) || 
        quote.author.toLowerCase().includes(searchText.toLowerCase())
        )));
    },[props.savedQuotes, searchText])
    
    return(
    <div className='page savedPage'>
        <input className='searchQuote' placeholder='Search...' onChange={handleChange}/>
        {/* could use foreach but this is an efficient way to create codeblocks with inputted quotes */}
        {displayedQuotes.map((quote,index) => (
             <div key={index} className='quoteCard'>
                <button className='deleteButton' onClick={() => props.deleteQuote(quote.id)}>X</button>
                <p>{quote.text}</p>
                <p>-- {quote.author === '' ? 'Unknown' : quote.author}</p>
             </div>
        ))}       
    </div>

)
}