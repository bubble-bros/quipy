import React, {useState, useEffect} from 'react';

import Navigation from './components/Navigation';
import './App.css';
import GetQuotePage from './components/GetQuotePage';
import EnterQuotePage from './components/EnterQuotePage';
import SavedQuotesPage from './components/SavedQuotesPage';
import {database} from './firebase';

function App() {

  const [pageIndex, setPageIndex] = useState(2);

  const [savedQuotes, setSavedQuotes] = useState([])

  const quotesServerRef = 'savedQuotes';

  const saveQuote = (newQuote) => {
    const newSavedQuotes = [...savedQuotes, {...newQuote, id: savedQuotes.length}];
    updateSavedQuotes(newSavedQuotes);
  }

  const deleteQuote = (deleteIndex) => {
    const newSavedQuotes = savedQuotes.filter(quote => quote.id !== deleteIndex);
    updateSavedQuotes(newSavedQuotes);
  }

  const setSavedQuotesOnServer = (newSavedQuotes) => {
    database
    .ref(quotesServerRef)
    .set(newSavedQuotes);
  }

  const updateSavedQuotes = (newSavedQuotes) => {
    const newOrderedSavedQuotes = newSavedQuotes.map((quote, index) => ({...quote, id: index}));
    setSavedQuotes(newOrderedSavedQuotes);
    setSavedQuotesOnServer(newOrderedSavedQuotes);
  }

  const getSavedQuotesFromServer = () => {
    database
      .ref(quotesServerRef)
      .on('value', snapshot => {
        setSavedQuotes(snapshot.val());
      })
  }

  useEffect(() => {
    getSavedQuotesFromServer();
  },[]) 

  return (
    <div className="App">
        <Navigation setPageIndex={setPageIndex}/>
        {(pageIndex === 0) ? 
        <GetQuotePage saveQuote={saveQuote}/> :
        (pageIndex === 1) ? 
        <EnterQuotePage saveQuote={saveQuote}/> :
        <SavedQuotesPage savedQuotes={savedQuotes} deleteQuote={deleteQuote}/>        
        }
    </div>
  );
}

export default App;
