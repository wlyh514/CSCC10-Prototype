import React, { useEffect } from 'react';
import { AppConfigContext } from './contexts/AppConfig';
import { NavigatorContext } from './contexts/Navigator';

function App() {

  const appConfig = React.useContext(AppConfigContext);
  const navigator = React.useContext(NavigatorContext);

  const screen = navigator.getScreen();

  return (
    <div className="App">
      <div className="phone-container bordered">
        <div style={{
          width: '100%', height: '100%',
          margin: 0, textAlign: 'center',
          overflow: screen.scrollable? 'auto': 'hidden'}}>

        {screen.body}

        </div>
      </div>
    </div>
  );
}

export default App;
