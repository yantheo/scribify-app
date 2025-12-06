import { useState } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Transcriber from './components/Transcriber';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleGetStarted = () => {
    setCurrentPage('transcriber');
  };

  const handleBackHome = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <>
          <Header onGetStarted={handleGetStarted} />
          <Landing onGetStarted={handleGetStarted} />
        </>
      ) : (
        <>
          <Header onGetStarted={() => {}} />
          <Transcriber onBackHome={handleBackHome} />
        </>
      )}
    </div>
  );
}

export default App;
