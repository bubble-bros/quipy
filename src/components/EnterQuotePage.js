import React, {useState} from 'react';

export default () =>{

    const [enteredQuote, setEnteredQuote ] = useState('');
    const [enteredAuthor, setEnteredAuthor ] = useState('');

    const handleChange = (event) => {
        setEnteredQuote(event.target.value);
    }

    return(
    <div style={{background:'green'}}>
        
        <h1>Enter Quote Page</h1>
        <input placeholder='Enter quote...' onChange={event => handleChange(event)}/>
        <input placeholder='Enter author...' onChange={event => handleChange(event)}/>

        </div>
)
}