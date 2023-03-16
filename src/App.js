import React from 'react';
import './App.css';
import { ErrorBoundary} from 'react-error-boundary';
import { ErrorFallback } from './components/ErrorFallback';


function Bomb({username}) {
  if (username === 'bomb'){
    throw new Error(" CABOOM !!!");
  }
  return `Hello! ${username}`;
}

function App(){
  const [username,setUsername] = React.useState('');

  return(
    <div className='App'>
      <header className='App-header'>
        <label>
          {`Username: `}
          <input
            placeholder={`type "bomb"`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </label>
        <ErrorBoundary FallbackComponent={ErrorFallback}
          onReset={() => setUsername('')}>
         <Bomb username={username} />
        </ErrorBoundary>
      </header>
    </div>
  )
};

export default App;