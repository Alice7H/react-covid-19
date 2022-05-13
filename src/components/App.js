import React from 'react';
import '../App.css';
import Top from './Top';
import Cases from './Cases';
import  Jumbo from './Jumbo';
import Bottom from './Bottom';
import TotalConfirmed from './charts/TotalConfirmed';
import TotalDeaths from './charts/TotalDeaths';
import DayConfirmed from './charts/DayConfirmed';
import DayDeaths from './charts/DayDeaths';

function App() {
  return (
    <div className="App">
      <Top/>
      <header className="app-header main">
          <Jumbo />
          <Cases />
          <h2> COVID-19 no Brasil</h2>
          <DayConfirmed />
          <DayDeaths />
          <TotalConfirmed />
          <TotalDeaths />
      </header>
      <footer className="app-footer main">
        <Bottom />
      </footer>
    </div>
  );
}

export default App;
