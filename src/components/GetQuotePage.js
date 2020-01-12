import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default (props) =>{
    const [quote , setQuote ] = useState('');
    const [author , setAuthor ] = useState('');

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
        {quote === '' ?
        <Loader type='Puff' color='#FFFFFF' height={200} width={200}/>
        : <div>
            <p>{quote}</p>
            <p>-- {author === '' ? 'Unknown' : author}</p>
            <button onClick={() => props.saveQuote({text: quote, author: author})}>Save Quote!</button>
            <button onClick={getQuote}>More Quotes!</button>
        </div>
        }
        </div>
)
}