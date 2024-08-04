import { useState } from 'react';
import './App.css';
import { Dashboard } from './Dashboard';
import { SignIn } from './SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div>
      {currentPage === 'dashboard' && <Dashboard navigate={setCurrentPage} />}
      {currentPage === 'signin' && <SignIn navigate={setCurrentPage} />}
    </div>
  );
}

export default App;
