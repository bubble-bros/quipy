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
    <div style={{background:'indigo'}}>
        
        <h1>Enter Quote Page</h1>

        <form onSubmit={handleSubmit}>
            <input placeholder='Enter quote...' name='text' value={enteredQuote.text} onChange={event => handleChange(event)}/>
            <input placeholder='Enter author...' name='author' value={enteredQuote.author} onChange={event => handleChange(event)}/>
            <br/>
            <button type='submit'>Save Quote</button>
        </form>
        </div>
)
}