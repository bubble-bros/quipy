import React, {useState} from 'react';

import Navigation from './components/Navigation';
import logo from './logo.svg';
import './App.css';
import GetQuotePage from './components/GetQuotePage';
import EnterQuotePage from './components/EnterQuotePage';
import SavedQuotesPage from './components/SavedQuotesPage';

function App() {

  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Navigation setPageIndex={setPageIndex}/>
        {(pageIndex === 0) ? 
        <GetQuotePage/> :
        (pageIndex === 1) ? 
        <EnterQuotePage/> :
        <SavedQuotesPage/>        
        }
      </header>
    </div>
  );
}

export default App;
