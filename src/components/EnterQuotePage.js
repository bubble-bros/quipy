import React, {useState} from 'react';

export default (props) =>{

    const [enteredQuote, setEnteredQuote ] = useState({text: '', author:''});

    const handleChange = (event) => {
        setEnteredQuote({...enteredQuote, [event.target.name]: event.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.saveQuote(enteredQuote)
        setEnteredQuote({text: '', author: ''});
    }

    return(
    <div className='page'>
        <form onSubmit={handleSubmit} className='enterQuoteForm'>
            <input className='quoteInput quoteTextInput' placeholder='Enter quote...' name='text' value={enteredQuote.text} onChange={event => handleChange(event)}/>
            <input className='quoteInput' placeholder='Enter author...' name='author' value={enteredQuote.author} onChange={event => handleChange(event)}/>
            <button className='button' type='submit'>Save Quote</button>
        </form>
        </div>
)
}