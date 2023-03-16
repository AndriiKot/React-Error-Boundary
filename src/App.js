import React from 'react';
import './App.css';
import { withErrorBoundary } from 'react-error-boundary';


function Bomb({username}) {
  if (username === 'bomb'){
    throw new Error(" CABOOM !!!");
  }
  return `Hello ${username}`;
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
        <Bomb username={username} />
      </header>
    </div>
  )
}
export default withErrorBoundary (App, {
  fallback: <div>OppS! Something went wrong. </div>
});
