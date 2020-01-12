import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default (props) =>{

    const [quote , setQuote ] = useState('to be or not to be');
    const [author , setAuthor ] = useState('me');

    useEffect(() => {getQuote()}, []);

    const getQuote = () => {
        
        //get quote from API
        axios.get('https://quote-garden.herokuapp.com/quotes/random')
            .then( res => {
                console.log(res);
                setQuote(res.data.quoteText)
                setAuthor(res.data.quoteAuthor)
            })
            .catch(err => {
                console.log(err);
                setQuote('sorry, i failed');
                setAuthor('sad sever');
            })
    }

    return(
    <div style={{background:'blue'}}>
        <h1>Get Quote Page</h1>
        <p>{quote}</p>
        <p>-- {author}</p>
        <button onClick={() => props.saveQuote({text: quote, author: author})}>Save Quote!</button>
        <br/>
        <button onClick={getQuote}>More Quotes!</button>
        </div>
)
}