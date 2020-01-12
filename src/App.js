import React, {useState, useEffect} from 'react';

import Navigation from './components/Navigation';
import './App.css';
import GetQuotePage from './components/GetQuotePage';
import EnterQuotePage from './components/EnterQuotePage';
import SavedQuotesPage from './components/SavedQuotesPage';
import {database} from './firebase';

function App() {

  const [pageIndex, setPageIndex] = useState(0);

  const [savedQuotes, setSavedQuotes] = useState([])

  const quotesServerRef = 'savedQuotes';

  const saveQuote = (newQuote) => {
    const newSavedQuotes = [...savedQuotes, newQuote];
    setSavedQuotes(newSavedQuotes);
    console.log(newSavedQuotes);
    database
      .ref(quotesServerRef)
      .set(newSavedQuotes);
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
      <header className="App-header">
        <Navigation setPageIndex={setPageIndex}/>
        {(pageIndex === 0) ? 
        <GetQuotePage saveQuote={saveQuote}/> :
        (pageIndex === 1) ? 
        <EnterQuotePage saveQuote={saveQuote}/> :
        <SavedQuotesPage savedQuotes={savedQuotes}/>        
        }
      </header>
    </div>
  );
}

export default App;
